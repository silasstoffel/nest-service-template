import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseSwaggerSchema {
  @ApiProperty({ description: 'Success status', default: true })
  success = true;

  @ApiProperty({ description: 'Message', default: null })
  message: string | null;

  //@ApiProperty({ description: 'Data', required: false })
  data: any;
}
