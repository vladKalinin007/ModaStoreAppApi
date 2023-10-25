import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductModel, CategoryProductTypeModel } from "./";

export class ProductTypeModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    products: ProductModel[];

    @IsOptional()
    categoryProductTypes: CategoryProductTypeModel[];
}
