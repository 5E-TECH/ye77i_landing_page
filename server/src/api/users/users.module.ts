import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entity/user.entity';
import { BcryptEncryption } from 'src/infrastucture/lib/bcrypt/bcrypt';
import { BcryptCompare } from 'src/infrastucture/lib/bcrypt/encrypt';

@Module({
  imports: [TypeOrmModule.forFeature([
    UserEntity
  ])],
  controllers: [UsersController],
  providers: [UsersService, BcryptEncryption, BcryptCompare],
})
export class UsersModule {}
