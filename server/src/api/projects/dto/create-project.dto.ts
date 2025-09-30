import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Portfolio Website' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Bu project portfolio uchun yaratilgan' })
  @IsString()
  description: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Project image file',
  })
  @IsOptional()
  img?: any; // 🔥 Fayl uchun 'binary'

  @ApiProperty({ example: 'https://github.com/username/project' })
  @IsString()
  project_link: string;
}
