import { ApiProperty } from '@nestjs/swagger';

export class PaginatorControlSchema {
  @ApiProperty({ description: 'Count', required: false, default: 0 })
  count = 0;

  @ApiProperty({ description: 'Limit of records', required: false, default: 0 })
  limit = 0;

  @ApiProperty({ description: 'Offset', required: false, default: 0 })
  offset = 0;

  @ApiProperty({ description: 'Total of records', required: false, default: 0 })
  total = 0;
}

export class ApiPaginatedResponseSwaggerSchema {
  @ApiProperty({ description: 'Paginator control', required: false })
  control: PaginatorControlSchema;

  items: any;
}
