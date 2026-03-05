import { UserRole } from 'src/core/entity/user.entity';

export type AuthUser = {
  userId: string;
  email: string;
  role: UserRole;
};
