import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBlogDto {
  @ApiProperty({ example: 'NestJS Best Practices', required: false })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'Bu blogda NestJS bo‘yicha amaliy maslahatlar beriladi',
    required: false,
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Blog cover image',
  })
  @IsOptional()
  file?: any;

  @ApiProperty({
    example: 'fe6c53a3-c41e-4dd7-b2b9-03122dd160df',
    description: 'Blog qaysi projectga tegishli ekanligi',
    required: false,
  })
  @IsOptional()
  @IsUUID()
  project_id?: string;
}
