import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { OrderModel } from './order.model';

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
}
