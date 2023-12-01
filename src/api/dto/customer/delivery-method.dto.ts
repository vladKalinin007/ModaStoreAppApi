import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { OrderDto } from '..';
import { DeliveryMethodModel } from 'domain/models/customer/delivery-method.model';

export class DeliveryMethodDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  shortName: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  deliveryTime: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: true, type: () => OrderDto })
  @IsOptional()
  orders: OrderDto[];

  static fromModel(model: DeliveryMethodModel): DeliveryMethodDto {
    return {
      id: model.id,
      shortName: model.shortName,
      deliveryTime: model.deliveryTime,
      description: model.description,
      price: model.price,
    } as DeliveryMethodDto;
  }
}
