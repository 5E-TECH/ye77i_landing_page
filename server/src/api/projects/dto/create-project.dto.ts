import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Portfolio Website' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Bu project portfolio uchun yaratilgan' })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString()
  img_link: string;

  @ApiProperty({ example: 'https://github.com/username/project' })
  @IsOptional()
  @IsString()
  project_link: string;
}
