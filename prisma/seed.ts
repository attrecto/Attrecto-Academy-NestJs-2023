import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  /**
   * Init some test course
   */

  await prisma.course.create({
    data: {
      title: 'First course',
      description: 'This is my first course',
      author: 'John Doe',
    },
  });
};

main();
