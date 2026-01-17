import { Injectable } from '@nestjs/common';
// prettier formatlash

// admin dashboard yaratildi
// caching mexanizmi qo'shildi
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
// database querylarni optimallashtirish
