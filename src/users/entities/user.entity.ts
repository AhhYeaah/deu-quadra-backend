import { Roles } from '@prisma/client';

export class UserEntity {
  identificador: number;
  name: string;
  email: string;
  hashedPassword: string;
  role: Roles;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
