import { BaseEntity } from "src/common/database/BaseEntity";
import { Exclude } from 'class-transformer';
import { Column, Entity } from "typeorm";

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
}

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar', unique: true})
    email: string;

    @Exclude()
    @Column({type: "varchar", select: false})
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.ADMIN })
    role: UserRole;
}
