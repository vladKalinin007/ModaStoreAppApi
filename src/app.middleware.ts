import { INestApplication } from '@nestjs/common';

export function middleware(app: INestApplication): INestApplication {
  app.use((req, res, next) => {
    if (req.url === '/') {
      res.redirect(301, '/api');
    } else {
      next();
    }
  });

  app.enableCors({
    origin: ['http://localhost:4200', 'https://moda-store-client.vercel.app'],
    credentials: true,
  });

  return app;
}
