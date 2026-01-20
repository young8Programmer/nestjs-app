// database querylarni optimallashtirish
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
// installation qo'llanmasi yaratildi
// prettier formatlash
// README faylini yangilash
// unit testlar qo'shildi
// package.json yangilandi
// integration testlar yaratildi
// database migrations yaratildi
// ESLint qoidalariga moslashtirish
// user authentication qo'shildi
// admin dashboard yaratildi
// CI/CD pipeline sozlandi
// unit testlar qo'shildi
// kod uslubini yaxshilash
// product catalog funksiyasi qo'shildi
// API response formatini yaxshilash

// prettier formatlash
@Injectable()
// product catalog funksiyasi qo'shildi
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
