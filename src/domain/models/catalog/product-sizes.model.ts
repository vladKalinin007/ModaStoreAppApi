import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';
import { SizeModel } from '../common/size.model';

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
