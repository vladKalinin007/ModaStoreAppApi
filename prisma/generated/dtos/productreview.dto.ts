import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDate } from "class-validator";
import { AppUserDto, ProductDto } from "./";

export class ProductReviewDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    comment: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    userId?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    productId?: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsDate()
    createdOnUtc: Date;

    @ApiProperty({ required: false, type: () => AppUserDto })
    @IsOptional()
    user?: AppUserDto;

    @ApiProperty({ required: false, type: () => ProductDto })
    @IsOptional()
    product?: ProductDto;
}
