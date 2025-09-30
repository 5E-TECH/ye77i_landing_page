// users.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../core/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BcryptEncryption } from '../../infrastucture/lib/bcrypt/bcrypt';
import { BcryptCompare } from '../../infrastucture/lib/bcrypt/encrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly bcryptEncrypt: BcryptEncryption,
    private readonly bcryptCompare: BcryptCompare,
  ) {}

  // CREATE
  async create(dto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.userRepo.findOne({
      where: { email: dto.email },
    });
    if (existingUser) throw new BadRequestException('Email allaqachon mavjud');

    const hashedPassword = await this.bcryptEncrypt.encrypt(dto.password);
    const user = this.userRepo.create({ ...dto, password: hashedPassword });
    return await this.userRepo.save(user);
  }

  // FIND ALL
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // FIND ONE
  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User topilmadi');
    return user;
  }

  // UPDATE
  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    if (dto.password) {
      dto.password = await this.bcryptEncrypt.encrypt(dto.password);
    }
    Object.assign(user, dto);
    return await this.userRepo.save(user);
  }

  // DELETE
  async remove(id: string): Promise<{ message: string }> {
    const user = await this.findOne(id);
    await this.userRepo.remove(user);
    return { message: 'User muvaffaqiyatli o‘chirildi' };
  }

  // CHECK PASSWORD (login uchun)
  async checkPassword(email: string, password: string): Promise<boolean> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) throw new NotFoundException('User topilmadi');
    return await this.bcryptCompare.compare(password, user.password);
  }
}
