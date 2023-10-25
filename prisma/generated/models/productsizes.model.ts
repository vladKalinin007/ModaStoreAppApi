import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel, SizeModel } from './';

export class ProductSizesModel {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  sizeId: string;

  @IsOptional()
  product: ProductModel;

  @IsOptional()
  size: SizeModel;
}
