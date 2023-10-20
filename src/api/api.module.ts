import { Module } from '@nestjs/common';
import {ApplicationModule} from "../application/application.module";
import {ProductController} from "./controllers/product.controller";
import {CategoryController} from "./controllers/category.controller";

@Module({
    imports: [
        ApplicationModule,
    ],
    controllers: [
        ProductController,
        CategoryController,
    ],
})
export class ApiModule {}
