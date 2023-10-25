import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel, ColorModel } from './';

export class ProductColorsModel {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  colorId: string;

  @IsOptional()
  product: ProductModel;

  @IsOptional()
  color: ColorModel;
}
