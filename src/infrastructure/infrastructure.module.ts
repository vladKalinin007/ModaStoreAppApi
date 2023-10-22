import { Module } from '@nestjs/common';
// import {ProductService} from "./services/catalog/product.service";
import {CategoryService} from "./services/catalog/category.service";
import {PrismaService} from "./database/prisma.service";
import {BasketService} from "./services/customer/basket.service";

@Module({
    imports: [

    ],
    providers: [
        PrismaService,
        // ProductService,
        CategoryService,
        BasketService
    ],
    exports: [
        // ProductService,
        CategoryService,
        PrismaService,
        BasketService
    ]

})
export class InfrastructureModule {}
