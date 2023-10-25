import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductSizesModel } from './';

export class SizeModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  productSizes: ProductSizesModel[];
}
