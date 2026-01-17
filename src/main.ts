import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// database testlari qo'shildi
// dependencies yangilandi
// CORS xatosi tuzatildi
// API hujjatlarini qo'shish
async function bootstrap() {
// prettier formatlash
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
