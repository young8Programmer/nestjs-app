// bundle size optimallashtirildi
// shopping cart funksiyasi qo'shildi
// database querylarni optimallashtirish
// bundle size optimallashtirildi
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
// real-time notifications implementatsiya qilindi
// CORS xatosi tuzatildi
// componentlarni qayta tashkilash
// environment variables sozlandi
// ESLint qoidalariga moslashtirish
// API response formatini yaxshilash
// unit testlar qo'shildi
// API endpoint testlari qo'shildi
import { Test, TestingModule } from '@nestjs/testing';
// build konfiguratsiyasi sozlandi
// bundle size optimallashtirildi
// memory leak muammosi hal qilindi
import { INestApplication } from '@nestjs/common';
// database querylarni optimallashtirish
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// prettier formatlash

describe('AppController (e2e)', () => {
  let app: INestApplication;
// code comments qo'shildi

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
