import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ReturnObject } from './dto/return-object.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): ReturnObject {
    return this.appService.getHello();
  }

  @Get()
  getString(): string {
    return 'hello';
  }
}
