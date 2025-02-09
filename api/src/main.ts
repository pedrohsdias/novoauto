import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://meudominio.com'], // Domínios permitidos
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeçalhos permitidos
    credentials: true, // Permite envio de cookies e credenciais
  });
  const configService = app.get(ConfigService);
  // Configurando o Swagger
  const config = new DocumentBuilder()
    .setTitle('API Autopericiado')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      tagsSorter: (tag1, tag2) => {
        if (tag1 === 'Auth') return -1; // Coloca 'Auth' primeiro
        return tag1.localeCompare(tag2); // Ordem alfabética para o resto
      },
    },
  });

  await app.listen(configService.get<number>('APP_PORT') || 3000);
}
bootstrap();
