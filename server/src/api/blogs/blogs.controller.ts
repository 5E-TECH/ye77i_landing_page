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
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';

@ApiTags('blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'NestJS Best Practices' },
        content: {
          type: 'string',
          example: 'Bu blogda NestJS bo‘yicha amaliy maslahatlar beriladi',
        },
        img: { type: 'string', example: 'https://example.com/image.png' },
        project_id: {
          type: 'string',
          example: 'fe6c53a3-c41e-4dd7-b2b9-03122dd160df',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(
    @Body() dto: CreateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.create(dto, file);
  }

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Updated blog title' },
        content: { type: 'string', example: 'Updated blog content' },
        img: { type: 'string', example: 'https://example.com/image.png' },
        project_id: {
          type: 'string',
          example: 'fe6c53a3-c41e-4dd7-b2b9-03122dd160df',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBlogDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.blogsService.update(id, dto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(id);
  }
}
