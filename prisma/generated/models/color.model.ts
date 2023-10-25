import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductColorsModel } from "./";

export class ColorModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    colorCode: string;

    @IsOptional()
    productColors: ProductColorsModel[];
}
