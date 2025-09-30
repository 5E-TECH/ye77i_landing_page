import { UserEntity } from './../entity/user.entity';
import { Repository } from "typeorm";

export type MemberRepository = Repository<UserEntity>