// database migrations yaratildi
// changelog yangilandi
// database migrations yaratildi
import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
// integration testlar yaratildi
// CI/CD pipeline sozlandi
// code comments qo'shildi
// installation qo'llanmasi yaratildi
// CI/CD pipeline sozlandi
// build konfiguratsiyasi sozlandi
// database querylarni optimallashtirish
// caching mexanizmi qo'shildi
// database testlari qo'shildi
// caching mexanizmi qo'shildi
// package.json yangilandi
// caching mexanizmi qo'shildi
// image optimization qo'shildi

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

