import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { OrderModel } from './order.model';
import { v4 as uuid } from 'uuid';

export class OrderItemModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  itemOrdered_ProductItemId: string;

  @IsNotEmpty()
  @IsString()
  itemOrdered_ProductName: string;

  @IsNotEmpty()
  @IsString()
  itemOrdered_PictureUrl: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  orderId?: string;

  @IsOptional()
  order?: OrderModel;

  constructor(
    itemOrdered_ProductItemId: string,
    itemOrdered_ProductName: string,
    itemOrdered_PictureUrl: string,
    price: number,
    quantity: number,
    orderId?: string,
    order?: OrderModel,
  ) {
    this.id = uuid();
    this.itemOrdered_ProductItemId = itemOrdered_ProductItemId;
    this.itemOrdered_ProductName = itemOrdered_ProductName;
    this.itemOrdered_PictureUrl = itemOrdered_PictureUrl;
    this.price = price;
    this.quantity = quantity;
    this.orderId = orderId;
    this.order = order;
  }
}
