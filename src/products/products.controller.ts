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
import {
  ApiTags,
  ApiOperation,
  ApiResponse as SwaggerApiResponse,
  ApiParam,
} from '@nestjs/swagger';

import { CreateProductDto } from './dtos/create.product';
import { ProductService } from './product.service';
import { BaseController } from '../common/http/base.controller';
import {
  ApiResponse,
  IApiResponsePaginatorControl,
} from '../common/http/api.response';
import { UpdateProductDto } from './dtos/update.products';
import {
  ProductIndexApiResponse,
  ProductGetApiResponse,
  ProductStoreApiResponse,
} from './schemas/product.api.response';
import { ApiErrorResponseSwaggerSchema } from '../common/swagger/api.error.response.swagger.schema';

@Controller({
  version: '1',
  path: '/products',
})
@ApiTags('Products')
export class ProductsController extends BaseController {
  constructor(private productService: ProductService) {
    super();
  }

  @Get()
  @ApiOperation({ summary: 'Load all products' })
  @SwaggerApiResponse({
    status: 200,
    description: 'Products',
    type: ProductIndexApiResponse,
  })
  async index(): Promise<ApiResponse> {
    const products = await this.productService.findAll();
    const paginator: IApiResponsePaginatorControl = {
      count: 5,
      limit: 10,
      offset: 0,
      total: products.length,
    };
    return this.responseWithPaginationControl(paginator, products);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by ID' })
  @SwaggerApiResponse({
    status: 200,
    description: 'Product',
    type: ProductGetApiResponse,
  })
  @SwaggerApiResponse({
    status: 400,
    description: 'Client error',
    type: ApiErrorResponseSwaggerSchema,
  })
  @ApiParam({
    name: 'id',
    format: 'string',
    required: true,
    description: 'ID',
  })
  async get(@Param() params): Promise<ApiResponse> {
    const product = await this.productService.findById(params.id);
    return this.response(product);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create product' })
  @SwaggerApiResponse({
    status: 201,
    description: 'Created',
    type: ProductStoreApiResponse,
  })
  @SwaggerApiResponse({
    status: 400,
    description: 'Client error',
    type: ApiErrorResponseSwaggerSchema,
  })
  async store(@Body() product: CreateProductDto): Promise<ApiResponse> {
    await this.productService.create(product);
    return this.response(null, 'created');
  }

  @Put(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Update product' })
  @ApiParam({
    name: 'id',
    format: 'string',
    required: true,
    description: 'ID',
  })
  @SwaggerApiResponse({
    status: 204,
    description: 'Updated',
    type: ProductStoreApiResponse,
  })
  @SwaggerApiResponse({
    status: 400,
    description: 'Client error',
    type: ApiErrorResponseSwaggerSchema,
  })
  async update(
    @Body() product: UpdateProductDto,
    @Param() params,
  ): Promise<ApiResponse> {
    await this.productService.update(product, params.id);
    return this.response();
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete product' })
  @ApiParam({
    name: 'id',
    format: 'string',
    required: true,
    description: 'ID',
  })
  @SwaggerApiResponse({
    status: 204,
    description: 'Deleted',
    type: ProductStoreApiResponse,
  })
  @SwaggerApiResponse({
    status: 400,
    description: 'Client error',
    type: ApiErrorResponseSwaggerSchema,
  })
  async delete(@Param() params): Promise<ApiResponse> {
    await this.productService.remove(params.id);
    return this.response();
  }
}
