import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
