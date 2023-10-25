import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductModel, TagModel } from "./";

export class ProductTagsModel {
    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    tagId: string;

    @IsOptional()
    product: ProductModel;

    @IsOptional()
    tag: TagModel;
}
