import { MembersModule } from './members/members.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.DB_URL,
      entities: [__dirname + '/../core/entity/*.entity{.ts,.js}'],
      synchronize: config.DB_SYNCHRONIZE,
      autoLoadEntities: true,
    }),
    MembersModule,
    UsersModule,
    ProjectsModule,
    BlogsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
