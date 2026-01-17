import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
// package.json yangilandi

@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}

