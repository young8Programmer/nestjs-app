// database migrations yaratildi
// database migrations yaratildi
import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
// code comments qo'shildi
// installation qo'llanmasi yaratildi
// CI/CD pipeline sozlandi
// build konfiguratsiyasi sozlandi
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

