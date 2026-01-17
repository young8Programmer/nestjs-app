import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
// code comments qo'shildi
  constructor(private readonly appService: AppService) {}
// API endpoints qo'shildi

// componentlarni qayta tashkilash
// code comments qo'shildi
  @Get()
  getHello(): string {
// README faylini yangilash
    return this.appService.getHello();
  }
}
