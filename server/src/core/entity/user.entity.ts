import { BaseEntity } from "src/common/database/BaseEntity";
import { Column, Entity } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity {
    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'varchar'})
    email: string;

    @Column({type: "varchar"})
    password: string
}
