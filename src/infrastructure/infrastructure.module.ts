import { Module } from '@nestjs/common';
import {ProductService} from "./services/catalog/product.service";
import {Product} from "../domain/entities/catalog/product.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "../domain/entities/catalog/category.entity";
import {CategoryService} from "./services/catalog/category.service";
import {TypeOrmConfigModule} from "./config/typeorm/typeorm.module";

@Module({
    imports: [
        TypeOrmConfigModule,
        TypeOrmModule.forFeature([
            Product,
            Category
        ]
    )],
    providers: [
        ProductService,
        CategoryService
    ],
    exports: [
        ProductService,
        CategoryService
    ]

})
export class InfrastructureModule {}
