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
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { imageUploadOptions } from 'src/common/utils/upload-file.util';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/core/entity/user.entity';

@ApiTags('blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file', imageUploadOptions('blogs')))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateBlogDto })
  create(
    @Body() dto: CreateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.create(dto, file);
  }

  @Public()
  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @UseInterceptors(FileInterceptor('file', imageUploadOptions('blogs')))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateBlogDto })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.update(id, dto, file);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.blogsService.remove(id);
  }
}
