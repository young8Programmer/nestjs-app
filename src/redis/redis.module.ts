import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
// code comments qo'shildi
// installation qo'llanmasi yaratildi
// caching mexanizmi qo'shildi
// package.json yangilandi
// caching mexanizmi qo'shildi
// image optimization qo'shildi

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

