import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  ClassSerializerInterceptor,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Reflector } from '@nestjs/core';
import config from 'src/config';

export default class Application {
  public static async main(): Promise<void> {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      bufferLogs: true,
    });

    app.useLogger(['error', 'warn', 'debug', 'log']);

    // Global filters, pipes, cors
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    );
    app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
    app.enableCors({
      origin: true,
      credentials: true,
    });

    const apiPrefix = 'api/v1';
    app.setGlobalPrefix(apiPrefix);

    const configSwagger = new DocumentBuilder()
      .setTitle('Ye77i Landing API')
      .setDescription('Production-ready API for Ye77i landing page')
      .setVersion('2.0.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup(`${apiPrefix}/docs`, app, document);

    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/',
    });

    const PORT = config.PORT;
    await app.listen(PORT, '0.0.0.0');
    console.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
    console.log(`📘 Swagger: http://localhost:${PORT}/${apiPrefix}/docs`, 'Bootstrap');
  }
}
