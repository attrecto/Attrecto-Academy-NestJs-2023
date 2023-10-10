import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Course> {
    return this.courseService.findOne(+id);
  }

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Post()
  create(@Body() body: Prisma.CourseCreateInput) {
    return this.courseService.create(body);
  }

  @Put(':id')
  modify(@Body() body: Prisma.CourseCreateInput, @Param('id') id: string) {
    return this.courseService.modify(body, +id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.courseService.delete(+id);
  }
}
