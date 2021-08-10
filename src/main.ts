import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Logger, VersioningType } from '@nestjs/common';
import { grpcClientOptions, grpcPort } from './grpc-client.options';

const logger = new Logger('Main');

const bootstrap = async () => {
  const restPort = 3001;
  process.env.REST_PORT = restPort.toString();
  process.env.GRPC_PORT = grpcPort.toString();
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(restPort);
  logger.log(
    '🍻️ Core APIs Nest Service Template REST layer listening on port ' +
      restPort,
  );
  logger.log(
    '🍻️ Core APIs Nest Service Template gRPC layer listening on port ' +
      grpcPort,
  );
};

bootstrap();
