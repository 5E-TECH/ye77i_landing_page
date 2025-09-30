import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, HttpStatus } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; // 👈 qo'shildi
import { join } from 'path';

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
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    );

    // Prefix & Swagger
    const api = 'api/v1';
    app.setGlobalPrefix(api);

    const configSwagger = new DocumentBuilder()
      .setTitle('Post Control System API')
      .setDescription('API for post delivery management')
      .setVersion('1.0.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup(api, app, document);

    // Static files
    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/',
    });

    // Start
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`🚀 Server running on http://localhost:${PORT}`, 'Bootstrap');
  }
}
