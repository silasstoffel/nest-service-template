import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerModule,
  SwaggerCustomOptions,
} from '@nestjs/swagger';

export function appSwaggerBootstrap(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Pricing Events Service API')
    .setDescription(
      'Serviço de gerenciamento de eventos dos micro serviços do ecosistema pricing.',
    )
    .setVersion('1.0.0')
    .build();
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      defaultModelsExpandDepth: -1,
    },
    customSiteTitle: 'Pricing Events Service - Docs',
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document, customOptions);
}
