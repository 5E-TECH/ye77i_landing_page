import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty({ example: 'Dilshodbek' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Backend developer' })
  @IsString()
  bio: string;

  @ApiProperty({ example: 'Developer' })
  @IsString()
  position: string;

  @ApiProperty({ example: 'https://github.com/dilshod', required: false })
  @IsOptional()
  @IsUrl()
  github?: string;

  @ApiProperty({ example: 'https://instagram.com/dilshod', required: false })
  @IsOptional()
  @IsUrl()
  instagram?: string;

  @ApiProperty({ example: 'https://linkedin.com/in/dilshod', required: false })
  @IsOptional()
  @IsUrl()
  linkedin?: string;
}
