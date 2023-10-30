import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';
import { ColorModel } from '../common/color.model';

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
