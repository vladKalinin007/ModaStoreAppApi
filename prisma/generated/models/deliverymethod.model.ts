import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { OrderModel } from "./";

export class DeliveryMethodModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    shortName: string;

    @IsNotEmpty()
    @IsString()
    deliveryTime: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsOptional()
    orders: OrderModel[];
}
