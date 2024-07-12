import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order/order.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}

bootstrap();