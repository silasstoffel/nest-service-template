import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Product } from '../interfaces/products.interface';
import { ProductService } from '../services/product.service';

@Controller({
  version: '1',
  path: '/products',
})
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  async index(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async get(@Param() params): Promise<Product> {
    return this.productService.findById(params.id);
  }

  @Post()
  @HttpCode(201)
  async store(@Body() product: Product): Promise<void> {
    this.productService.create(product);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Body() product: Product, @Param() params): Promise<void> {
    this.productService.update(product, params.id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() params) {
    this.productService.remove(params.id);
  }
}
