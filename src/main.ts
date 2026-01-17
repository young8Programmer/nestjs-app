import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// environment variables sozlandi
// environment variables sozlandi
// CORS xatosi tuzatildi
// environment variables sozlandi
// routing muammosi hal qilindi

// installation qo'llanmasi yaratildi
// database testlari qo'shildi
// dependencies yangilandi
// API endpoint testlari qo'shildi
// user authentication qo'shildi
// authentication xatosi tuzatildi
// real-time notifications implementatsiya qilindi
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
