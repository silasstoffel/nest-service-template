import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from 'src/v1/products/products.module';

import { HealthModule } from '../health/health.module';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule, ProductsModule],
  controllers: [AppController],
})
export class AppModule {}
