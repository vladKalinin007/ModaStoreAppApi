import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductTagsModel } from "./";

export class TagModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    productTags: ProductTagsModel[];
}
