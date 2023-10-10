import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import * as bcryptjs from 'bcryptjs';
import { RegisterDto } from './dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  static hashPassword(password: string) {
    return bcryptjs.hash(password, 12);
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    const { password: userHashedPassword, ...restUser } = user;

    const isMatched = await bcryptjs.compare(password, userHashedPassword);

    if (!isMatched) {
      return null;
    }

    return restUser;
  }

  async register(data: RegisterDto) {
    const { password: plainPassword, email, ...restUser } = data;

    const hashedPassword = await AuthService.hashPassword(plainPassword);

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new BadRequestException(`User with this email is already exists`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.prisma.user.create({
      data: {
        ...restUser,
        password: hashedPassword,
        email,
      },
    });

    return user;
  }
}
