import { Course } from '@prisma/client';

export class CreateCourseDto {
    title: string;
    authorId: number;
    description: string;
    url: string;

    createdAt: Date;
    updatedAt: Date;

    author?: any;
}
