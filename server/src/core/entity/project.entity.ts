import { BaseEntity } from 'src/common/database/BaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BlogEntity } from './blog.entity';

@Entity('projects')
export class ProjectEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar', nullable: true })
  img_link: string; // rasm URL

  @Column({ type: 'varchar' })
  project_link: string; // project link

  @OneToMany(() => BlogEntity, (blog) => blog.project)
  blogs: BlogEntity[];
}
