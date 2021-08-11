import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as request from 'supertest';

import { AppModule } from './app.module';

describe('AppModule', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ConfigModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('[GET]: /alive', () => {
    return request(app.getHttpServer()).get('/alive').expect(200).expect({
      message: `I'm alive.`,
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
