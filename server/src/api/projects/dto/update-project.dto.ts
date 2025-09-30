import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto {
  @ApiProperty({ example: 'Portfolio Website', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Bu project portfolio uchun yaratilgan',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Project image file',
  })
  @IsOptional()
  img?: any;

  @ApiProperty({
    example: 'https://github.com/username/project',
    required: false,
  })
  @IsOptional()
  @IsString()
  project_link?: string;
}

