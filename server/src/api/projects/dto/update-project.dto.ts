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

  @ApiProperty({ example: 'https://example.com/image.png', required: false })
  @IsOptional()
  @IsString()
  img_link?: string;

  @ApiProperty({
    example: 'https://github.com/username/project',
    required: false,
  })
  @IsOptional()
  @IsString()
  project_link?: string;
}
