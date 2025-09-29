import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'Dilshodbek' },
        bio: { type: 'string', example: 'Backend developer' },
        position: { type: 'string', example: 'Developer' },
        github: { type: 'string', example: 'https://github.com/dilshod' },
        instagram: { type: 'string', example: 'https://instagram.com/dilshod' },
        linkedin: {
          type: 'string',
          example: 'https://linkedin.com/in/dilshod',
        },
        img: { type: 'string', format: 'binary' }, // 🔑 shu joy fayl uchun
      },
    },
  })
  create(
    @Body() createMemberDto: CreateMemberDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.membersService.create(createMemberDto, file);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('img'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateMemberDto })
  update(
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.membersService.update(id, updateMemberDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(id);
  }
}
