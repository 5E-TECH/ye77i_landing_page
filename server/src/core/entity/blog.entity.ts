import { BaseEntity } from "src/common/database/BaseEntity";
import { Column, Entity } from "typeorm";

@Entity('blog')
export class BlogEntity extends BaseEntity {
    @Column({type: "uuid"})
    blog_id: string;

    @Column({type: "varchar"})
    title: string;

    @Column({type: "varchar"})
    content: string;

    @Column({type: "varchar"})
    img_link: string;
}
