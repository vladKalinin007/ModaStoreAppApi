import { Module } from '@nestjs/common';
// import {ProductService} from "./services/catalog/product.service";
import {Product} from "../domain/entities/catalog/product.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "../domain/entities/catalog/category.entity";
import {CategoryService} from "./services/catalog/category.service";
import {TypeOrmConfigModule} from "./config/typeorm/typeorm.module";
import {PrismaService} from "./database/prisma.service";

@Module({
    imports: [
        // TypeOrmConfigModule,
        // TypeOrmModule.forFeature([
        //     Product,
        //     Category
        // ]
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
