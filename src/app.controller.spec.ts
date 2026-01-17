import { Test, TestingModule } from '@nestjs/testing';
// API endpoint testlari qo'shildi
// validation xatolari tuzatildi
import { AppController } from './app.controller';
import { AppService } from './app.service';
// package.json yangilandi

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
