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
  ParseUUIDPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ApiBearerAuth, ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { imageUploadOptions } from 'src/common/utils/upload-file.util';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/core/entity/user.entity';

@ApiTags('Members')
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('img', imageUploadOptions('members')))
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
        img: { type: 'string', format: 'binary' },
      },
    },
  })
  create(
    @Body() createMemberDto: CreateMemberDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.membersService.create(createMemberDto, file);
  }

  @Public()
  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.membersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('img', imageUploadOptions('members')))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateMemberDto })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateMemberDto: UpdateMemberDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.membersService.update(id, updateMemberDto, file);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.membersService.remove(id);
  }
}
