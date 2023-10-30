import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { AddressModel } from './address.model';
import { DeliveryMethodModel } from './delivery-method.model';
import { OrderItemModel } from './order-item.model';

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
