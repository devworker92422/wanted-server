import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return {
      statusCode: HttpStatus.OK,
      msg: "Wanted Server is running now"
    };
  }
}
