import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
  Min,
  Max,
} from 'class-validator';
import { AppUserModel } from '../identity/app-user.model';
import { ProductModel } from './product.model';

export class ProductReviewModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(5)
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
