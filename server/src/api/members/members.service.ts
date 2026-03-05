import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../core/entity/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import type { MemberRepository } from 'src/core/repository/member.repository';
import { removeUploadedFile } from 'src/common/utils/upload-file.util';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepo: MemberRepository,
  ) {}

  async create(createMemberDto: CreateMemberDto, file?: Express.Multer.File) {
    const member = this.memberRepo.create({
      ...createMemberDto,
      img: file ? `/uploads/members/${file.filename}` : null,
    });
    return await this.memberRepo.save(member);
  }

  async findAll() {
    return await this.memberRepo.find();
  }

  async findOneOrFail(id: string): Promise<MemberEntity> {
    const member = await this.memberRepo.findOne({ where: { id } });
    if (!member) {
      throw new NotFoundException(`Member with id ${id} not found`);
    }
    return member;
  }

  async findOne(id: string) {
    return await this.findOneOrFail(id);
  }

  async update(
    id: string,
    updateMemberDto: UpdateMemberDto,
    file?: Express.Multer.File,
  ) {
    const member = await this.findOneOrFail(id);

    if (file) {
      removeUploadedFile(member.img);
      member.img = `/uploads/members/${file.filename}`;
    }

    Object.assign(member, updateMemberDto);

    return await this.memberRepo.save(member);
  }

  async remove(id: string) {
    const member = await this.findOneOrFail(id);
    removeUploadedFile(member.img);
    await this.memberRepo.remove(member);
    return { message: 'Member removed successfully' };
  }
}
