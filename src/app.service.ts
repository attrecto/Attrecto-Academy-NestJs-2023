import { Injectable } from '@nestjs/common';
import { ReturnObject } from './dto/return-object.dto';

@Injectable()
export class AppService {
  getHello(): ReturnObject {
    return { test: 'Hello World!' };
  }
}
