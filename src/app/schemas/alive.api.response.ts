import { ApiProperty } from '@nestjs/swagger';

export class AliveApiResponse {
  @ApiProperty({ description: 'Message', example: `I'm alive` })
  message: string;
}
