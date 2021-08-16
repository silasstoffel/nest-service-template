import { ApiProperty } from '@nestjs/swagger';

export class ApiErrorResponseSwaggerSchema {
  @ApiProperty({ description: 'Success status' })
  success = true;

  @ApiProperty({ description: 'Message' })
  message: string | null;

  @ApiProperty({ description: 'Data', required: false, default: null })
  data: any;
}
