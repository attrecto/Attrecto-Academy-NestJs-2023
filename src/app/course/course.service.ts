import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id }, include: { author: true } });
  }

  create(data: Prisma.CourseCreateInput) {
    return this.prisma.course.create({ data });
  }

  modify(data: Prisma.CourseUpdateInput, id: number) {
    return this.prisma.course.update({ where: { id }, data });
  }

  delete(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
