import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductModel } from './product.model';

export class ProductBrandModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @IsOptional()
  products: ProductModel[];
}
