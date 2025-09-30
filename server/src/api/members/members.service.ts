import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../core/entity/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import type { MemberRepository } from 'src/core/repository/member.repository';
import { successRes } from 'src/infrastucture/lib/response/successRes';
import { catchError } from 'src/infrastucture/lib/response/catchError';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepo: MemberRepository,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    try {
      const member = this.memberRepo.create(createMemberDto);
      const saved = await this.memberRepo.save(member);
      return successRes(saved, 201, 'Member created successfully');
    } catch (error) {
      catchError(error);
    }
  }

  async findAll() {
    try {
      const members = await this.memberRepo.find();
      return successRes(members);
    } catch (error) {
      catchError(error);
    }
  }

  /**
   * findOne for internal use
   * agar member topilmasa NotFoundException tashlaydi
   */
  async findOneOrFail(id: string): Promise<MemberEntity> {
    try {
      const member = await this.memberRepo.findOne({ where: { id } });
      if (!member) {
        throw new NotFoundException(`Member with id ${id} not found`);
      }
      return member;
    } catch (error) {
      return catchError(error);
    }
  }

  async findOne(id: string) {
    try {
      const member = await this.findOneOrFail(id);
      return successRes(member);
    } catch (error) {
      return catchError(error);
    }
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    try {
      const member = await this.findOneOrFail(id); // TypeScript safe
      Object.assign(member, updateMemberDto); // entity ustida ishlayapmiz
      const updated = await this.memberRepo.save(member);
      return successRes(updated, 200, 'Member updated successfully');
    } catch (error) {
      return catchError(error);
    }
  }

  async remove(id: string) {
    try {
      const member = await this.findOneOrFail(id); // TypeScript safe
      await this.memberRepo.remove(member);
      return successRes(null, 200, 'Member removed successfully');
    } catch (error) {
      return catchError(error);
    }
  }
}
