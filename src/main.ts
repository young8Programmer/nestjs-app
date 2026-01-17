import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// environment variables sozlandi

// database testlari qo'shildi
// dependencies yangilandi
// user authentication qo'shildi
// authentication xatosi tuzatildi
// componentlarni qayta tashkilash
// componentlarni qayta tashkilash
// code comments qo'shildi
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
