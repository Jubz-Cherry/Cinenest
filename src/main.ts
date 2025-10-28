import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração básica do Swagger
  const config = new DocumentBuilder()
    .setTitle('API do Projeto')
    .setDescription('Documentação da API com Swagger')
    .setVersion('1.0')
    .addTag('user') // opcional: adiciona tags pra organizar
    .build();

  // Cria o documento e monta o Swagger UI
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // /api = rota do Swagger

  await app.listen(3000);
  console.log('Swagger rodando em http://localhost:3000/api');
}
bootstrap();
