import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './modules/app.module';
import { ConfigService } from './modules/config/config.service';

export let app: NestExpressApplication;

async function bootstrap() {
  app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const PORT = app.get(ConfigService).get('PORT');
  await app.listen(PORT);
}
bootstrap();
