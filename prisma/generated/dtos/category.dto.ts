import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";
import { ProductDto, CategoryProductTypeDto } from "./";

export class CategoryDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    pictureUrl?: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsBoolean()
    showOnHomePage: boolean;

    @ApiProperty({ required: true, type: () => ProductDto })
    @IsOptional()
    products: ProductDto[];

    @ApiProperty({ required: true, type: () => CategoryProductTypeDto })
    @IsOptional()
    categoryProductTypes: CategoryProductTypeDto[];
}
