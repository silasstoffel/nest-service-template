import { ApiProperty } from '@nestjs/swagger';

import { ApiPaginatedResponseSwaggerSchema } from '../../common/swagger/api.paginated.response.swagger.schema.';
import { ApiResponseSwaggerSchema } from '../../common/swagger/api.response.swagger.schema';
import { Product } from '../entities/product.entity';

class PaginatedResponse extends ApiPaginatedResponseSwaggerSchema {
  @ApiProperty({ description: 'Itens', isArray: true, required: false })
  items: Product;
}

export class ProductIndexApiResponse extends ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Items', required: false })
  data: PaginatedResponse;
}

export class ProductGetApiResponse extends ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Result', required: false })
  data: Product;
}

export class ProductStoreApiResponse extends ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Result', required: false, default: null })
  data: any;
}
