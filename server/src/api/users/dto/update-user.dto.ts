// update-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from 'src/core/entity/user.entity';

export class UpdateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Userning ismi',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Userning emaili',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'User paroli',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password?: string;

  @ApiProperty({
    enum: UserRole,
    required: false,
    description: 'User roli',
  })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
