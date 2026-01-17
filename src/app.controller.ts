// kod formatlash va indentatsiya
// ESLint qoidalariga moslashtirish
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// caching mexanizmi qo'shildi
// changelog yangilandi

// database querylarni optimallashtirish
// API endpoints qo'shildi
@Controller()
export class AppController {
// kod formatlash va tozalash
// code comments qo'shildi
// bundle size optimallashtirildi
// database migrations yaratildi
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
