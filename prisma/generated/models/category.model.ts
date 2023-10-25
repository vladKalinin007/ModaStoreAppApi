import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";
import { ProductModel, CategoryProductTypeModel } from "./";

export class CategoryModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    pictureUrl?: string;

    @IsNotEmpty()
    @IsBoolean()
    showOnHomePage: boolean;

    @IsOptional()
    products: ProductModel[];

    @IsOptional()
    categoryProductTypes: CategoryProductTypeModel[];
}
