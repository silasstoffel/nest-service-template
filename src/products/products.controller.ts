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

import { CreateProductDto } from './dtos/create.product';
import { ProductService } from './product.service';
import { BaseController } from '../common/http/base.controller';
import { ApiResponse } from '../common/http/api.response';
import { UpdateProductDto } from './dtos/update.products';

@Controller({
  version: '1',
  path: '/products',
})
export class ProductsController extends BaseController {
  constructor(private productService: ProductService) {
    super();
  }

  @Get()
  async index(): Promise<ApiResponse> {
    const products = await this.productService.findAll();
    return this.response(products);
  }

  @Get(':id')
  async get(@Param() params): Promise<ApiResponse> {
    const product = await this.productService.findById(params.id);
    return this.response(product);
  }

  @Post()
  @HttpCode(201)
  async store(@Body() product: CreateProductDto): Promise<ApiResponse> {
    await this.productService.create(product);
    return this.response(null, 'created');
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Body() product: UpdateProductDto,
    @Param() params,
  ): Promise<ApiResponse> {
    await this.productService.update(product, params.id);
    return this.response();
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() params): Promise<ApiResponse> {
    await this.productService.remove(params.id);
    return this.response();
  }
}
