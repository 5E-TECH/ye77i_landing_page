import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../../core/entity/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import type { ProjectRepository } from 'src/core/repository/project.repository';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: ProjectRepository,
  ) {}

  // CREATE
  async create(createProjectDto: CreateProjectDto): Promise<ProjectEntity> {
    const project = this.projectRepo.create(createProjectDto);
    return await this.projectRepo.save(project);
  }

  // FIND ALL
  async findAll(): Promise<ProjectEntity[]> {
    return await this.projectRepo.find();
  }

  // FIND ONE
  async findOne(id: string): Promise<ProjectEntity> {
    const project = await this.projectRepo.findOne({ where: { id } });
    if (!project) {
      throw new NotFoundException('Project topilmadi');
    }
    return project;
  }

  // UPDATE
  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectEntity> {
    const project = await this.findOne(id);
    Object.assign(project, updateProjectDto);
    return await this.projectRepo.save(project);
  }

  // REMOVE
  async remove(id: string): Promise<{ message: string }> {
    const project = await this.findOne(id);
    await this.projectRepo.remove(project);
    return { message: 'Project muvaffaqiyatli o‘chirildi' };
  }
}
