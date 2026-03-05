import {
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'crypto';
import config from 'src/config';
import { UsersService } from 'src/api/users/users.service';
import type { AuthUser } from 'src/common/types/auth-user.type';

type TokenPayload = AuthUser & {
  exp: number;
  iat: number;
};

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(email: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.validateCredentials(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = this.signAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return { accessToken };
  }

  verifyAccessToken(token: string): AuthUser {
    const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');
    if (!encodedHeader || !encodedPayload || !encodedSignature) {
      throw new UnauthorizedException('Invalid token format');
    }

    const expectedSignature = this.sign(`${encodedHeader}.${encodedPayload}`);
    const a = Buffer.from(encodedSignature);
    const b = Buffer.from(expectedSignature);

    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      throw new UnauthorizedException('Invalid token signature');
    }

    const payload = this.decodePayload(encodedPayload);
    if (payload.exp * 1000 <= Date.now()) {
      throw new UnauthorizedException('Token expired');
    }

    return {
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    };
  }

  private signAccessToken(user: AuthUser): string {
    const now = Math.floor(Date.now() / 1000);
    const payload: TokenPayload = {
      ...user,
      iat: now,
      exp: now + config.JWT_EXPIRES_IN,
    };

    const encodedHeader = this.base64UrlEncode(
      JSON.stringify({ alg: 'HS256', typ: 'JWT' }),
    );
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const signature = this.sign(`${encodedHeader}.${encodedPayload}`);

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }

  private sign(data: string): string {
    return createHmac('sha256', config.JWT_SECRET)
      .update(data)
      .digest('base64url');
  }

  private decodePayload(encodedPayload: string): TokenPayload {
    try {
      const json = Buffer.from(encodedPayload, 'base64url').toString('utf-8');
      return JSON.parse(json) as TokenPayload;
    } catch {
      throw new UnauthorizedException('Invalid token payload');
    }
  }

  private base64UrlEncode(value: string): string {
    try {
      return Buffer.from(value, 'utf-8').toString('base64url');
    } catch {
      throw new InternalServerErrorException('Token encoding failed');
    }
  }
}
