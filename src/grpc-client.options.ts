import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { GRPC_PORT } from './enviroment';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:${GRPC_PORT}`,
    package: 'health',
    protoPath: join(__dirname, 'health/health.proto'),
  },
};
