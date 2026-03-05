import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from '../../core/entity/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { removeUploadedFile } from 'src/common/utils/upload-file.util';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepo: Repository<BlogEntity>,
  ) {}

  // CREATE
  async create(
    createBlogDto: CreateBlogDto,
    file?: Express.Multer.File,
  ): Promise<BlogEntity> {
    const blog = this.blogRepo.create({
      ...createBlogDto,
      img: file ? `/uploads/blogs/${file.filename}` : null,
    });
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
      removeUploadedFile(blog.img);
      Object.assign(blog, { img: `/uploads/blogs/${file.filename}` });
    }

    Object.assign(blog, updateBlogDto);
    return await this.blogRepo.save(blog);
  }

  // REMOVE
  async remove(id: string): Promise<{ message: string }> {
    const blog = await this.findOne(id);
    removeUploadedFile(blog.img);
    await this.blogRepo.remove(blog);
    return { message: 'Blog muvaffaqiyatli o‘chirildi' };
  }
}
