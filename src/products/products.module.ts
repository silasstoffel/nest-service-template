import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './products.controller';
import { ProductService } from './product.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
