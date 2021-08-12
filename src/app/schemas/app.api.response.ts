import { ApiProperty } from '@nestjs/swagger';

export class AppApiResponse {
  @ApiProperty({
    example: 'micro-service-name:version',
    description: 'Information of application',
  })
  app: string;
}
