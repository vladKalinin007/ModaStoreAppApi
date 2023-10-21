import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as process from "process";
import * as dotenv from 'dotenv';
import {middleware} from "./app.middleware";

async function bootstrap() {

  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

  const app = await NestFactory.create(AppModule);

  middleware(app);

  const config = new DocumentBuilder()
      .setTitle('ModaStore swagger API documentation')
      .setDescription('The moda store API description')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT, '0.0.0.0');

  console.log(process.env);


}
bootstrap();
