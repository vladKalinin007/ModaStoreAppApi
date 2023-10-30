import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ProductColorsModel } from '../catalog/product-colors.model';

export class ColorModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  colorCode: string;

  @IsOptional()
  productColors: ProductColorsModel[];
}
