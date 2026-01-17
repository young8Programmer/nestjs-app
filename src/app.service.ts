import { Injectable } from '@nestjs/common';

// admin dashboard yaratildi
// caching mexanizmi qo'shildi
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
// database querylarni optimallashtirish
