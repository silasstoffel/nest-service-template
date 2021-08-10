import { APP_NAME, APP_VERSION } from '../../constants';
import { Controller, Get, Header } from '@nestjs/common';
import { AppInfoInterface } from '../interfaces/app.info.interface';
import { AppAliveResponseInterface } from '../interfaces/app.alive.response.interface';

@Controller()
export class AppController {
  @Get()
  index(): AppInfoInterface {
    return { app: `${APP_NAME}:${APP_VERSION}` };
  }

  @Get('/alive')
  alive(): AppAliveResponseInterface {
    return { message: `I'm alive` };
  }
}
