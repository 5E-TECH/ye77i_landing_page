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
import { diskStorage } from 'multer';
import { extname } from 'path';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';

@ApiTags('Projects') // Swagger’da grouping uchun
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // CREATE
  @Post()
  @ApiConsumes('multipart/form-data') // 🔥 Swagger fayl yuklashni ko‘rsatishi uchun
  @ApiBody({ type: CreateProjectDto }) // 🔥 DTO ni Swagger’da to‘g‘ri ko‘rsatadi
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './uploads/projects',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `project-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.projectsService.create(createProjectDto, file);
  }

  // FIND ALL
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  // FIND ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  // UPDATE
  @Patch(':id')
  @ApiConsumes('multipart/form-data') // 🔥 Fayl yuklash uchun
  @ApiBody({ type: UpdateProjectDto }) // 🔥 Swagger’da DTO form
  @UseInterceptors(
    FileInterceptor('img', {
      storage: diskStorage({
        destination: './uploads/projects',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `project-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.projectsService.update(id, updateProjectDto, file);
  }

  // REMOVE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}
