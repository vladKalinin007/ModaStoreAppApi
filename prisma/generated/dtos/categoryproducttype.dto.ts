import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { CategoryDto, ProductTypeDto } from "./";

export class CategoryProductTypeDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    categoryId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    productTypeId?: string;

    @ApiProperty({ required: false, type: () => CategoryDto })
    @IsOptional()
    category?: CategoryDto;

    @ApiProperty({ required: false, type: () => ProductTypeDto })
    @IsOptional()
    productType?: ProductTypeDto;
}
