import { Controller, Get } from '@nestjs/common';

import { AliveResponseInterface } from './interfaces/alive.response.interface';

@Controller({
  path: '/alive',
})
export class AliveController {
  @Get()
  index(): AliveResponseInterface {
    return {
      message: `I'm alive.`,
    };
  }
}
