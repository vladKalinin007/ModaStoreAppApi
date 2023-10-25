import { IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { ProductModel } from './';

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
