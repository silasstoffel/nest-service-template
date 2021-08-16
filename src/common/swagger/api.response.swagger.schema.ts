import { ApiProperty } from '@nestjs/swagger';

export class PaginatorControlSchema {
  @ApiProperty({ description: 'Count', required: false, default: 20, example: 20 })
  count = 0;

  @ApiProperty({ description: 'Limit of records', required: false, default: 20, example: 20 })
  limit = 0;

  @ApiProperty({ description: 'Offset', required: false, default: 0, example: 0 })
  offset = 0;

  @ApiProperty({ description: 'Total of records', required: false, example: 100 })
  total = 0;
}

export class ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Success status', default: true })
  success = true;

  @ApiProperty({ description: 'Message', default: null })
  message: string | null;

  data: any;
}

export class ApiResponsePaginationControlSwaggerSchema extends ApiResponseSwaggerSchema {

  @ApiProperty({ description: 'Paginator control', default: PaginatorControlSchema})
  control: PaginatorControlSchema;

}
