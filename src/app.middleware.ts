import { INestApplication } from '@nestjs/common';
// import * as passport from 'passport';
// import * as session from 'express-session';
// import * as cookieParser from 'cookie-parser';

export function middleware(app: INestApplication): INestApplication {
  app.use((req, res, next) => {
    if (req.url === '/') {
      res.redirect(301, '/api');
    } else {
      next();
    }
  });

  // app.use(cookieParser());
  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  app.enableCors();

  return app;
}
