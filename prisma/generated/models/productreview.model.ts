import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { AppUserModel, ProductModel } from './';

export class ProductReviewModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @IsNotEmpty()
  @IsString()
  comment: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  productId?: string;

  @IsNotEmpty()
  @IsDate()
  createdOnUtc: Date;

  @IsOptional()
  user?: AppUserModel;

  @IsOptional()
  product?: ProductModel;
}
