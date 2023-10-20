import { Module } from '@nestjs/common';
import {InfrastructureModule} from "../infrastructure/infrastructure.module";
import {GetProductQueryHandler} from "./use-cases/catalog/product/queries/handlers/get-product.queryhandler";
import {CqrsModule} from "@nestjs/cqrs";
import {GetCategoriesQueryHandler} from "./use-cases/catalog/category/queries/handlers/get-categories.queryhandler";


@Module({
    imports: [
        CqrsModule,
        InfrastructureModule,
    ],
    providers: [
        GetProductQueryHandler,
        GetCategoriesQueryHandler,
    ],
    exports: [
        CqrsModule,
        InfrastructureModule,
        GetProductQueryHandler,
        GetCategoriesQueryHandler,
    ]
})
export class ApplicationModule {}
