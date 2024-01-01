import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { middleware } from './app.middleware';
import * as passport from 'passport';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import { SessionStore } from 'infrastructure/services/identity/session.store';

async function bootstrap() {
  dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

  const app = await NestFactory.create(AppModule);

  middleware(app);

  app.use(cookieParser());
  app.use(
    session({
      store: app.get(SessionStore),
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        domain:
          process.env.NODE_ENV === 'development'
            ? 'localhost'
            : '.up.railway.app',
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: false,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
    .setTitle('ModaStore REST API endpoints')
    .setVersion('1.0')
    .addCookieAuth('session')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT, '0.0.0.0');

  console.log(process.env);
}
bootstrap();
