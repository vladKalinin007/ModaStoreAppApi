import { Module } from '@nestjs/common';
// import {ProductService} from "./services/catalog/product.service";
import {CategoryService} from "./services/catalog/category.service";
import {PrismaService} from "./database/prisma.service";

@Module({
    imports: [

    ],
    providers: [
        PrismaService,
        // ProductService,
        CategoryService
    ],
    exports: [
        // ProductService,
        CategoryService,
        PrismaService
    ]

})
export class InfrastructureModule {}
