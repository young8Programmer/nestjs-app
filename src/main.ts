import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// database testlari qo'shildi
// dependencies yangilandi
// authentication xatosi tuzatildi
// API endpoint testlari qo'shildi
// CORS xatosi tuzatildi
// code comments qo'shildi
// API hujjatlarini qo'shish
async function bootstrap() {
// prettier formatlash
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
