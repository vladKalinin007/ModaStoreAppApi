import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { OrderDto } from "./";

export class OrderItemDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    itemOrdered_ProductItemId: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    itemOrdered_ProductName: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    itemOrdered_PictureUrl: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    orderId?: string;

    @ApiProperty({ required: false, type: () => OrderDto })
    @IsOptional()
    order?: OrderDto;
}
