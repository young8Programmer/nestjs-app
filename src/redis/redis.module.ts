import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
// code comments qo'shildi
// package.json yangilandi

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

