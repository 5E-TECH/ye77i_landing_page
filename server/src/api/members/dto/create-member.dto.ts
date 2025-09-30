import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @ApiProperty({ example: 'Dilshodbek' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 'https://image.com/dilshod.jpg' })
  @IsOptional()
  @IsString()
  img: string;

  @ApiProperty({ example: 'Backend developer' })
  @IsOptional()
  @IsString()
  bio: string;

  @ApiProperty({ example: 'Developer' })
  @IsOptional()
  @IsString()
  position: string;

  @ApiProperty({ example: 'https://github.com/dilshod' })
  @IsOptional()
  @IsString()
  github: string;

  @ApiProperty({ example: 'https://instagram.com/dilshod' })
  @IsOptional()
  @IsString()
  instagram: string;

  @ApiProperty({ example: 'https://linkedin.com/in/dilshod' })
  @IsOptional()
  @IsString()
  linkedin: string;
}
