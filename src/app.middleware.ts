import {INestApplication} from "@nestjs/common";
import passport from "passport";

export function middleware(app: INestApplication): INestApplication {
    const isProduction = process.env.NODE_ENV === 'production';

    app.use(passport.initialize());
    app.use(passport.session());
    app.enableCors();

    return app;

}
