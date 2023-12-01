import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { OrderDto } from '..';
import { OrderItemModel } from 'domain/models/customer/order-item.model';

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

  static fromModel(model: OrderItemModel): OrderItemDto {
    return {
      id: model.id,
      itemOrdered_ProductItemId: model.itemOrdered_ProductItemId,
      itemOrdered_ProductName: model.itemOrdered_ProductName,
      itemOrdered_PictureUrl: model.itemOrdered_PictureUrl,
      price: model.price,
      quantity: model.quantity,
    } as OrderItemDto;
  }
}
