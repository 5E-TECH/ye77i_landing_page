// create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'Userning ismi' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Userning emaili' })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ example: 'strongPassword123', description: 'User paroli' })
  @IsString()
  @IsOptional()
  @MinLength(6, { message: 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak' })
  password: string;
}
