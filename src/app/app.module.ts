import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from 'src/shared/utils/validate-env';

@Module({
  imports: [
    CourseModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
})
export class AppModule {}
