import {INestApplication} from "@nestjs/common";

export function middleware(app: INestApplication): INestApplication {

    // app.use((req, res, next) => {
    //     if (req.url === '/') {
    //         res.redirect(301, '/api');
    //     } else {
    //         next();
    //     }
    // });

    app.enableCors();

    return app;

}
