import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

import { AliveApiResponse } from './schemas/alive.api.response';

@Controller({
  path: '/alive',
})
@ApiTags('App')
export class AliveController {
  @Get()
  @ApiOperation({ summary: 'Alive status' })
  @ApiResponse({
    status: 200,
    description: 'Alive status',
    type: AliveApiResponse,
  })
  index(): AliveApiResponse {
    return {
      message: `I'm alive.`,
    };
  }
}
