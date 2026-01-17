import { Injectable } from '@nestjs/common';
// prettier formatlash

// admin dashboard yaratildi
// caching mexanizmi qo'shildi
@Injectable()
export class AppService {
// package.json yangilandi
  getHello(): string {
    return 'Hello World!';
  }
}
// database querylarni optimallashtirish
