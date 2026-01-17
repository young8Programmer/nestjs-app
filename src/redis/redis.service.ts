import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
// ESLint qoidalariga moslashtirish
// unit testlar qo'shildi

// prettier formatlash
@Injectable()
// kod strukturasini yaxshilash
export class RedisService {
// middleware funksiyalari qo'shildi
  private client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: +process.env.REDIS_PORT || 6379,
    });
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }
}
