import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateBlogDto {
  @ApiProperty({ example: 'NestJS Best Practices' })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Bu blogda NestJS bo‘yicha amaliy maslahatlar beriladi',
  })
  @IsOptional()
  @IsString()
  content: string;

  @ApiProperty({
    type: 'string',
    format: 'binary', // ✅ Fayl sifatida Swaggerda chiqadi
    required: false,
    description: 'Blog cover rasmi',
  })
  @IsOptional()
  img?: any; // ⚡ validator ishlatilmaydi

  @ApiProperty({
    example: '1',
    description: 'Blog qaysi projectga tegishli ekanligi',
  })
  @IsOptional()
  @IsString()
  project_id: string;
}
