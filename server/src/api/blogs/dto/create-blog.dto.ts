import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ example: 'NestJS Best Practices' })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Bu blogda NestJS bo‘yicha amaliy maslahatlar beriladi',
  })
  @IsString()
  content: string;

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
  })
  @IsUUID()
  project_id: string;
}
