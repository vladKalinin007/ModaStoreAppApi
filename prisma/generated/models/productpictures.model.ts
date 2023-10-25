import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductModel, PictureModel } from "./";

export class ProductPicturesModel {
    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    pictureId: string;

    @IsOptional()
    product: ProductModel;

    @IsOptional()
    picture: PictureModel;
}
