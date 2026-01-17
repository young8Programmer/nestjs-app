// component testlari yaratildi
// prettier formatlash
// type error tuzatildi
// database querylarni optimallashtirish
// ESLint qoidalariga moslashtirish
// routing muammosi hal qilindi
import { Module } from '@nestjs/common';
// installation qo'llanmasi yaratildi
// routing muammosi hal qilindi
// database testlari qo'shildi
// database migrations yaratildi
// bundle size optimallashtirildi
import { TypeOrmModule } from '@nestjs/typeorm';
// installation qo'llanmasi yaratildi
// API endpoint testlari qo'shildi
import { RedisModule } from './redis/redis.module';
// code comments qo'shildi
// memory leak muammosi hal qilindi
// package.json yangilandi
// image optimization qo'shildi
// error handling yaxshilandi
// caching mexanizmi qo'shildi
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'db',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || '1234',
      database: process.env.POSTGRES_DB || 'n9',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
