import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsDate,
} from 'class-validator';
import { AppUserDto, ProductDto } from '..';
import { ProductReviewModel } from 'domain/models/catalog/product-review.model';

export class ProductReviewDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  comment: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  userId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  productId?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  createdOnUtc: Date;

  @ApiProperty({ required: false, type: () => AppUserDto })
  @IsOptional()
  user?: AppUserDto;

  @ApiProperty({ required: false, type: () => ProductDto })
  @IsOptional()
  product?: ProductDto;

  // В ProductReviewDto
  static toModel(dto: ProductReviewDto): ProductReviewModel {
    return {
      ...dto,
      user: dto.user ? AppUserDto.toModel(dto.user) : undefined,
      product: null,
    };
  }

  static fromModel(model: ProductReviewModel): ProductReviewDto {
    return {
      ...model,
      user: model.user ? AppUserDto.fromModel(model.user) : undefined,
      product: model.product ? ProductDto.fromModel(model.product) : undefined,
    };
  }
}
