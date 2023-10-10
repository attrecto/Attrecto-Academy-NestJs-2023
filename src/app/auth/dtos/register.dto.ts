import { Prisma } from '@prisma/client';

export class RegisterDto implements Omit<Prisma.UserCreateInput, 'course'> {
  email: string;
  lastName: string;
  firstName: string;
  password: string;
}
