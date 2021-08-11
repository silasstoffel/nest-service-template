import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { grpcClientOptions } from './grpc-client.options';
import { HTTP_PORT, GRPC_PORT } from './enviroment';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

const logger = new Logger('Main');

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  //await app.startAllMicroservicesAsync();
  await app.listen(HTTP_PORT);

  logger.log(`HTTP listening on port ${HTTP_PORT}`);
  logger.log(`GRPC listening on port ${GRPC_PORT}`);
};

bootstrap();
