import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from '../products/products.module';

import { AliveController } from './alive.controller';
import { AppController } from './app.controller';

const imports = [ConfigModule.forRoot(), ProductsModule];

const controllers = [AppController, AliveController];

@Module({ imports, controllers })
export class AppModule {}
