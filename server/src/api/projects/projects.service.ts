import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../../core/entity/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<ProjectEntity>,
  ) {}

  async create(createProjectDto: CreateProjectDto, file?: Express.Multer.File) {
    const project = this.projectRepo.create({
      ...createProjectDto,
      img: file ? file.filename : null, // fayl nomini DB ga yozamiz
    });
    return await this.projectRepo.save(project);
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
    file?: Express.Multer.File,
  ) {
    const project = await this.findOne(id);
    Object.assign(project, updateProjectDto);
    if (file) {
      project.img = file.filename;
    }
    return await this.projectRepo.save(project);
  }

  async findAll() {
    return await this.projectRepo.find();
  }

  async findOne(id: string) {
    const project = await this.projectRepo.findOne({ where: { id } });
    if (!project) throw new NotFoundException('Project topilmadi');
    return project;
  }

  async remove(id: string) {
    const project = await this.findOne(id);
    await this.projectRepo.remove(project);
    return { message: 'Project muvaffaqiyatli o‘chirildi' };
  }
}
