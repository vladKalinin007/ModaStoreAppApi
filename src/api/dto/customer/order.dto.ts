import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { AddressDto, DeliveryMethodDto, OrderItemDto } from '..';
import { OrderModel } from 'domain/models/customer/order.model';

export class OrderDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  buyerEmail: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  orderDate: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  subtotal: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  paymentIntentId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  shipToAddressId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  deliveryMethodId?: string;

  @ApiProperty({ required: false, type: () => AddressDto })
  @IsOptional()
  shipToAddress?: AddressDto;

  @ApiProperty({ required: false, type: () => DeliveryMethodDto })
  @IsOptional()
  deliveryMethod?: DeliveryMethodDto;

  @ApiProperty({ required: true, type: () => OrderItemDto })
  @IsOptional()
  orderItems: OrderItemDto[];

  static fromModel(model: OrderModel): OrderDto {
    return {
      id: model.id,
      buyerEmail: model.buyerEmail,
      orderDate: model.orderDate,
      subtotal: model.subtotal,
      status: model.status,
      paymentIntentId: model.paymentIntentId,
      shipToAddressId: model.shipToAddressId,
      deliveryMethodId: model.deliveryMethodId,
      orderItems: model.orderItems.map((item) => OrderItemDto.fromModel(item)),
    } as OrderDto;
  }
}
