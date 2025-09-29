import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

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
    example: 'https://example.com/blog-cover.png',
    required: false,
  })
  @IsOptional()
  @IsString()
  img_link?: string;

  @ApiProperty({
    example: '1',
    description: 'Blog qaysi projectga tegishli ekanligi',
    required: false,
  })
  @IsOptional()
  @IsString()
  project_id?: string;
}
