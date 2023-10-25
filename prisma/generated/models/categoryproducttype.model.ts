import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { CategoryModel, ProductTypeModel } from "./";

export class CategoryProductTypeModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsOptional()
    @IsString()
    categoryId?: string;

    @IsOptional()
    @IsString()
    productTypeId?: string;

    @IsOptional()
    category?: CategoryModel;

    @IsOptional()
    productType?: ProductTypeModel;
}
