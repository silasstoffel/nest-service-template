import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { APP_NAME, APP_VERSION } from '../enviroment';
import { AppApiResponse } from './schemas/app.api.response';

@Controller()
@ApiTags('App')
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Information of micro service' })
  @ApiResponse({
    status: 200,
    description: 'App information',
    type: AppApiResponse,
  })
  index(): AppApiResponse {
    return { app: `${APP_NAME}:${APP_VERSION}` };
  }
}
