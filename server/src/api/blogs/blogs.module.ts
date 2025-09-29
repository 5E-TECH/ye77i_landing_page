import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/core/entity/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
