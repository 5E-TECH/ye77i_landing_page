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

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { imageUploadOptions } from 'src/common/utils/upload-file.util';
import { Public } from 'src/common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/core/entity/user.entity';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProjectDto })
  @UseInterceptors(FileInterceptor('img', imageUploadOptions('projects')))
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.projectsService.create(createProjectDto, file);
  }

  @Public()
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateProjectDto })
  @UseInterceptors(FileInterceptor('img', imageUploadOptions('projects')))
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateProjectDto: UpdateProjectDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.projectsService.update(id, updateProjectDto, file);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiBearerAuth()
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.projectsService.remove(id);
  }
}
