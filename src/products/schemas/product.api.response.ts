import { ApiProperty } from "@nestjs/swagger";

import {
  ApiResponsePaginationControlSwaggerSchema,
  ApiResponseSwaggerSchema
} from "../../common/swagger/api.response.swagger.schema";
import { Product } from "../entities/product.entity";

export class ProductIndexApiResponse extends ApiResponsePaginationControlSwaggerSchema {
  @ApiProperty({ description: "Items", required: false, isArray: true })
  data: Product;
}

export class ProductGetApiResponse extends ApiResponseSwaggerSchema {
  @ApiProperty({ description: "Result", required: false })
  data: Product;
}

export class ProductStoreApiResponse extends ApiResponseSwaggerSchema {
  @ApiProperty({ description: "Result", required: false, default: null })
  data: any;
}
