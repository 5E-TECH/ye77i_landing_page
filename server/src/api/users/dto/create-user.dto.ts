// create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsEnum, IsOptional } from 'class-validator';
import { UserRole } from 'src/core/entity/user.entity';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Userning ismi' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Userning emaili' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'strongPassword123', description: 'User paroli' })
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password: string;

  @ApiProperty({ enum: UserRole, required: false, example: UserRole.EDITOR })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
