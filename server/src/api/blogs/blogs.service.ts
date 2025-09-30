import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from '../../core/entity/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepo: Repository<BlogEntity>,
  ) {}

  private saveFile(file: Express.Multer.File): string {
    const uploadDir = path.join(__dirname, '../../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.originalname);
    fs.writeFileSync(filePath, file.buffer);

    return `/uploads/${file.originalname}`; // DB ga yoziladigan path
  }

  // CREATE
  async create(
    createBlogDto: CreateBlogDto,
    file?: Express.Multer.File,
  ): Promise<BlogEntity> {
    if (file) {
      createBlogDto.img = this.saveFile(file);
    }
    const blog = this.blogRepo.create(createBlogDto);
    return await this.blogRepo.save(blog);
  }

  // FIND ALL
  async findAll(): Promise<BlogEntity[]> {
    return await this.blogRepo.find({
      relations: ['project'],
    });
  }

  // FIND ONE
  async findOne(id: string): Promise<BlogEntity> {
    const blog = await this.blogRepo.findOne({
      where: { id },
      relations: ['project'],
    });
    if (!blog) {
      throw new NotFoundException('Blog topilmadi');
    }
    return blog;
  }

  // UPDATE
  async update(
    id: string,
    updateBlogDto: UpdateBlogDto,
    file?: Express.Multer.File,
  ): Promise<BlogEntity> {
    const blog = await this.findOne(id);

    if (file) {
      updateBlogDto.img = this.saveFile(file);
    }

    Object.assign(blog, updateBlogDto);
    return await this.blogRepo.save(blog);
  }

  // REMOVE
  async remove(id: string): Promise<{ message: string }> {
    const blog = await this.findOne(id);
    await this.blogRepo.remove(blog);
    return { message: 'Blog muvaffaqiyatli o‘chirildi' };
  }
}
