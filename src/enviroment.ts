export const APP_NAME = process.env.hasOwnProperty('APPLICATION_NAME')
  ? process.env.APPLICATION_NAME
  : 'Pricing Events Service';

export const APP_VERSION = process.env.hasOwnProperty('APPLICATION_VERSION')
  ? process.env.APPLICATION_VERSION
  : '1.0.0';

export const HTTP_PORT = process.env.hasOwnProperty('HTTP_PORT')
  ? process.env.HTTP_PORT
  : '3001';

export const GRPC_PORT = process.env.hasOwnProperty('GRPC_PORT')
  ? process.env.GRPC_PORT
  : '5000';
