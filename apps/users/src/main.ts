import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(process.env.PORT || 3001);
  console.log('Approval Service start at port: ', process.env.PORT || 3001);
}
bootstrap();
