import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../core/entity/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import type { MemberRepository } from 'src/core/repository/member.repository';
import { successRes } from 'src/infrastucture/lib/response/successRes';
import { catchError } from 'src/infrastucture/lib/response/catchError';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(MemberEntity)
    private readonly memberRepo: MemberRepository,
  ) {}

  private saveFile(file: Express.Multer.File): string | null {
    if (!file) return null;

    const uploadDir = path.join(__dirname, '../../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, file.originalname);
    fs.writeFileSync(filePath, file.buffer);

    return `/uploads/${file.originalname}`; // DB da saqlanadigan path
  }

  async create(createMemberDto: CreateMemberDto, file?: Express.Multer.File) {
    try {
      let imageUrl: string | undefined;

      if (file) {
        imageUrl = this.saveFile(file) ?? undefined;
      }


      const member = this.memberRepo.create({
        ...createMemberDto,
        img: imageUrl,
      });

      const saved = await this.memberRepo.save(member);
      return successRes(saved, 201, 'Member created successfully');
    } catch (error) {
      return catchError(error);
    }
  }

  async findAll() {
    try {
      const members = await this.memberRepo.find();
      return successRes(members);
    } catch (error) {
      return catchError(error);
    }
  }

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

  async update(
    id: string,
    updateMemberDto: UpdateMemberDto,
    file?: Express.Multer.File,
  ) {
    try {
      const member = await this.findOneOrFail(id);

      if (file) {
        member.img = this.saveFile(file);
      }

      Object.assign(member, updateMemberDto);

      const updated = await this.memberRepo.save(member);
      return successRes(updated, 200, 'Member updated successfully');
    } catch (error) {
      return catchError(error);
    }
  }

  async remove(id: string) {
    try {
      const member = await this.findOneOrFail(id);
      await this.memberRepo.remove(member);
      return successRes(null, 200, 'Member removed successfully');
    } catch (error) {
      return catchError(error);
    }
  }
}
