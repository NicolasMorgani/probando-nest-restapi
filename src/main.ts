import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  const config = new DocumentBuilder()
   .addBearerAuth()
    .setTitle('Test Swagger')
    .setDescription('Evaluacion Tecnica')
    .setVersion('1.0')
    .addTag('Test')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documents', app, document);
  await app.listen(3000);
}
bootstrap();
