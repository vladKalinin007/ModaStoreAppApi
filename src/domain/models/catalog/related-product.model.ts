import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ProductModel } from './product.model';

export class RelatedProductModel {
  @IsOptional()
  productA: ProductModel;

  @IsNotEmpty()
  @IsString()
  productAId: string;

  @IsOptional()
  productB: ProductModel;

  @IsNotEmpty()
  @IsString()
  productBId: string;
}
