import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Success status' })
  success = true;

  @ApiProperty({ description: 'Message' })
  message: string | null;

  //@ApiProperty({ description: 'Data', required: false })
  data: any;
}
