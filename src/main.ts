import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from '@nestjs/config';
import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: ConfigType<typeof appConfig> = app.get(appConfig.KEY);

  await app.listen(config.port, () =>
    console.log(`Server is running on port ${config.port}`),
  );
}
bootstrap();
