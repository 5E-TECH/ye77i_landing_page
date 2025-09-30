import { BaseEntity } from 'src/common/database/BaseEntity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { ProjectEntity } from './project.entity';

@Entity('blog')
export class BlogEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'varchar', nullable: true })
  img: string | null; // cover image

  @Column({ type: 'varchar' })
  project_id: string;

  @ManyToOne(() => ProjectEntity, (project) => project.blogs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'project_id' })
  project: ProjectEntity;
}
