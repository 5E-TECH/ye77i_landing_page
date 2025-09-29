import { Repository } from "typeorm";
import { MemberEntity } from "../entity/member.entity";

export type MemberRepository = Repository<MemberEntity>