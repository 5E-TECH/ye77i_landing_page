import { MembersModule } from './members/members.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_URL,
      entities: [__dirname + '/../core/entity/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    MembersModule,
    UsersModule,
    ProjectsModule,
    BlogsModule
  ],
})
export class AppModule {}
