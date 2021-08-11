import { Controller, Get } from '@nestjs/common';

import { AppInfoInterface } from './interfaces/app.info.interface';
import { APP_NAME, APP_VERSION } from '../enviroment';

@Controller()
export class AppController {
  @Get()
  index(): AppInfoInterface {
    return { app: `${APP_NAME}:${APP_VERSION}` };
  }
}
