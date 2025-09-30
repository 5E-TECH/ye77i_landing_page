import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMemberDto {
  @ApiProperty({ example: 'Dilshodbek', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'Backend developer', required: false })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ example: 'Developer', required: false })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiProperty({ example: 'https://github.com/dilshod', required: false })
  @IsOptional()
  @IsString()
  github?: string;

  @ApiProperty({ example: 'https://instagram.com/dilshod', required: false })
  @IsOptional()
  @IsString()
  instagram?: string;

  @ApiProperty({ example: 'https://linkedin.com/in/dilshod', required: false })
  @IsOptional()
  @IsString()
  linkedin?: string;
}
