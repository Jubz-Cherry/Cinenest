import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // habilita CORS para o front
  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  // configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API do Projeto')
    .setDescription('Documentação da API com Swagger')
    .setVersion('1.0')
    .addBearerAuth() 
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
  console.log('🚀 API rodando em http://localhost:3005');
  console.log('📘 Swagger em http://localhost:3005/api');
}

bootstrap();
