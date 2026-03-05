// users.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity, UserRole } from '../../core/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BcryptEncryption } from '../../infrastucture/lib/bcrypt/bcrypt';
import { BcryptCompare } from '../../infrastucture/lib/bcrypt/encrypt';
import config from 'src/config';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly bcryptEncrypt: BcryptEncryption,
    private readonly bcryptCompare: BcryptCompare,
  ) {}

  // 🚀 Modul ishga tushganda admin yaratish
  async onModuleInit() {
    const adminEmail = config.ADMIN_EMAIL;
    const adminPassword = config.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      this.logger.warn('⚠️ ADMIN_EMAIL yoki ADMIN_PASSWORD .env da topilmadi');
      return;
    }

    const existingAdmin = await this.userRepo.findOne({
      where: { email: adminEmail },
    });

    if (!existingAdmin) {
      const hashedPassword = await this.bcryptEncrypt.encrypt(adminPassword);
      const admin = this.userRepo.create({
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        role: UserRole.ADMIN,
      });
      await this.userRepo.save(admin);

      this.logger.log(`✅ Default admin yaratildi: ${adminEmail}`);
    } else {
      this.logger.log('ℹ️ Admin allaqachon mavjud, yangi yaratilmaydi');
    }
  }

  // CREATE
  async create(dto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUser) throw new BadRequestException('Email allaqachon mavjud');

    const hashedPassword = await this.bcryptEncrypt.encrypt(dto.password);
    const user = this.userRepo.create({
      ...dto,
      password: hashedPassword,
      role: dto.role ?? UserRole.EDITOR,
    });
    const saved = await this.userRepo.save(user);
    return this.findOne(saved.id);
  }

  // FIND ALL
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // FIND ONE
  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User topilmadi');
    return user;
  }

  // UPDATE
  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);

    if (dto.email && dto.email !== user.email) {
      const existingUser = await this.userRepo.findOne({
        where: { email: dto.email },
      });
      if (existingUser) {
        throw new BadRequestException('Email allaqachon mavjud');
      }
    }

    if (dto.password) {
      dto.password = await this.bcryptEncrypt.encrypt(dto.password);
    }
    Object.assign(user, dto);
    await this.userRepo.save(user);
    return this.findOne(id);
  }

  // DELETE
  async remove(id: string): Promise<{ message: string }> {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return { message: 'User muvaffaqiyatli o‘chirildi' };
  }

  async validateCredentials(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.userRepo
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();

    if (!user) {
      return null;
    }

    const isValid = await this.bcryptCompare.compare(password, user.password);
    if (!isValid) {
      return null;
    }

    const { password: _password, ...safeUser } = user as UserEntity & {
      password: string;
    };
    return safeUser as UserEntity;
  }
}
