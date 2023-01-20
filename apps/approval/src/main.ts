import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { stringify } from 'yaml';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Approval example')
    .setDescription('The Approval API description')
    .setVersion('1.0')
    .addTag('approval')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  const apiYaml = stringify(document);
  writeFileSync('./apps/approval/src/documentation/api.yaml', apiYaml);

  await app.listen(process.env.PORT || 3005);
  console.log('Approval Service start at port: ', process.env.PORT || 3005);
}
bootstrap();
