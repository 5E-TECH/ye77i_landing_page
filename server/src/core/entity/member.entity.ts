import { BaseEntity } from 'src/common/database/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity('members')
export class MemberEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  img: string | null;

  @Column({ type: 'varchar' })
  bio: string;

  @Column({ type: 'varchar' })
  position: string;

  @Column({ type: 'varchar', nullable: true })
  github: string | null;

  @Column({ type: 'varchar', nullable: true })
  instagram: string | null;

  @Column({ type: 'varchar', nullable: true })
  linkedin: string | null;
}
