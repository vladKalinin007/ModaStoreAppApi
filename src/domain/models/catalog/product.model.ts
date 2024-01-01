import { Prisma } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsBoolean,
} from 'class-validator';
import { ProductTypeModel } from './product-type.model';
import { CategoryModel } from './category.model';
import { ProductBrandModel } from './product-brand.model';
import { RelatedProductModel } from './related-product.model';
import { ProductColorsModel } from './product-colors.model';
import { ProductPicturesModel } from './product-pictures.model';
import { ProductSizesModel } from './product-sizes.model';
import { ProductTagsModel } from './product-tags.model';
import { ProductReviewModel } from './product-review.model';
import { ColorModel } from '../common/color.model';
import { SizeModel } from '../common/size.model';

export class ProductModel {
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
  shortDescription?: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  oldPrice?: Prisma.Decimal;

  @IsOptional()
  specialPrice?: Prisma.Decimal;

  @IsOptional()
  discountPercentage?: Prisma.Decimal;

  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @IsNotEmpty()
  @IsDate()
  createdOnUtc: Date;

  @IsNotEmpty()
  @IsDate()
  updatedOnUtc: Date;

  @IsOptional()
  @IsNumber()
  stockQuantity?: number;

  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsString()
  season?: string;

  @IsOptional()
  @IsString()
  material?: string;

  @IsOptional()
  @IsString()
  style?: string;

  @IsOptional()
  @IsString()
  pattern?: string;

  @IsOptional()
  @IsString()
  occasion?: string;

  @IsOptional()
  @IsString()
  sleeve?: string;

  @IsOptional()
  @IsString()
  neckline?: string;

  @IsOptional()
  @IsString()
  dressLength?: string;

  @IsOptional()
  @IsString()
  waistline?: string;

  @IsOptional()
  @IsString()
  silhouette?: string;

  @IsOptional()
  @IsString()
  decoration?: string;

  @IsOptional()
  @IsString()
  closureType?: string;

  @IsOptional()
  @IsString()
  pantClosureType?: string;

  @IsOptional()
  @IsString()
  pantLength?: string;

  @IsOptional()
  @IsString()
  pantStyle?: string;

  @IsOptional()
  @IsString()
  fitType?: string;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean;

  @IsNotEmpty()
  @IsBoolean()
  deleted: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isFeatured: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isCallForPricing: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isOnSale: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isNew: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isBestSeller: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isGiftCard: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isDownload: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isRecurring: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isShipEnabled: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isFreeShipping: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isOnHomePage: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isOnSalePage: boolean;

  @IsNotEmpty()
  @IsBoolean()
  allowCustomerReviews: boolean;

  @IsNotEmpty()
  @IsBoolean()
  disableBuyButton: boolean;

  @IsNotEmpty()
  @IsBoolean()
  disableWishlistButton: boolean;

  @IsNotEmpty()
  @IsBoolean()
  disableCompareButton: boolean;

  @IsNotEmpty()
  @IsBoolean()
  showOnHomePage: boolean;

  @IsNotEmpty()
  @IsBoolean()
  showOnSalePage: boolean;

  @IsOptional()
  @IsString()
  ProductTypeId?: string;

  @IsOptional()
  @IsString()
  CategoryId?: string;

  @IsOptional()
  @IsString()
  ProductBrandId?: string;

  @IsOptional()
  productType?: ProductTypeModel;

  @IsOptional()
  category?: CategoryModel;

  @IsOptional()
  productBrand?: ProductBrandModel;

  @IsOptional()
  productARelations: RelatedProductModel[];

  relatedProducts: string[];

  @IsOptional()
  productBRelations: RelatedProductModel[];

  @IsOptional()
  productColors: ProductColorsModel[];

  colors: ColorModel[];

  @IsOptional()
  productPictures: ProductPicturesModel[];

  pictures: string[];

  @IsOptional()
  productSizes: ProductSizesModel[];

  sizes: SizeModel[];

  @IsOptional()
  productTags: ProductTagsModel[];

  @IsOptional()
  productReviews: ProductReviewModel[];
}
