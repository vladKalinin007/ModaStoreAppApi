import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsDate, IsNumber, IsOptional } from "class-validator";
import { AddressModel, DeliveryMethodModel, OrderItemModel } from "./";

export class OrderModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    buyerEmail: string;

    @IsNotEmpty()
    @IsDate()
    orderDate: Date;

    @IsNotEmpty()
    @IsNumber()
    subtotal: number;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsOptional()
    @IsString()
    paymentIntentId?: string;

    @IsOptional()
    @IsString()
    shipToAddressId?: string;

    @IsOptional()
    @IsString()
    deliveryMethodId?: string;

    @IsOptional()
    shipToAddress?: AddressModel;

    @IsOptional()
    deliveryMethod?: DeliveryMethodModel;

    @IsOptional()
    orderItems: OrderItemModel[];
}
