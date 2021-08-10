export const APP_NAME = process.env.hasOwnProperty('APPLICATION_NAME')
  ? process.env.APPLICATION_NAME
  : 'nest-service-template';

export const APP_VERSION = process.env.hasOwnProperty('APPLICATION_VERSION')
  ? process.env.APPLICATION_VERSION
  : '1.0.0';

export const APP_ARCH_VERSION = process.env.hasOwnProperty(
  'APPLICATION_ARCH_VERSION',
)
  ? process.env.APPLICATION_ARCH_VERSION
  : 'v1';
