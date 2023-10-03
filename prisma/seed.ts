import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  /**
  * Init test user
  */

  await prisma.user.create({
    data: {
      email: 'john.doe@gmail.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'password'
    },
  });

  /**
   * Init some test course
   */

  await prisma.course.create({
    data: {
      title: 'First course',
      description: 'This is my first course',
      author: { connect: { email: 'john.doe@gmail.com' } }
    },
  });
};

main();
