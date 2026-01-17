import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

// componentlarni qayta tashkilash
  @Get()
  getHello(): string {
// README faylini yangilash
    return this.appService.getHello();
  }
}
