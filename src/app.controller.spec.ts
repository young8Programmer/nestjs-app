import { Test, TestingModule } from '@nestjs/testing';
// bundle size optimallashtirildi
// API endpoint testlari qo'shildi
// database connection muammosi hal qilindi
// validation xatolari tuzatildi
// database connection muammosi hal qilindi
// API endpoints qo'shildi
import { AppController } from './app.controller';
import { AppService } from './app.service';
// package.json yangilandi
// error handling yaxshilandi
// bundle size optimallashtirildi

describe('AppController', () => {
  let appController: AppController;

// API response formatini yaxshilash
// CORS xatosi tuzatildi
  beforeEach(async () => {
// unit testlar qo'shildi
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
