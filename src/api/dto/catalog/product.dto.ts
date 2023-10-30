import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsBoolean,
} from 'class-validator';
import {
  ProductTypeDto,
  CategoryDto,
  ProductBrandDto,
  RelatedProductDto,
  ProductColorsDto,
  ProductPicturesDto,
  ProductSizesDto,
  ProductTagsDto,
  ProductReviewDto,
  ColorDto,
  SizeDto,
} from '..';
import { Prisma } from '@prisma/client';
import { ProductModel } from 'src/domain/models/catalog/product.model';

export class ProductDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  shortDescription?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ required: false })
  @IsOptional()
  oldPrice?: Prisma.Decimal;

  @ApiProperty({ required: false })
  @IsOptional()
  specialPrice?: Prisma.Decimal;

  @ApiProperty({ required: false })
  @IsOptional()
  discountPercentage?: Prisma.Decimal;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pictureUrl?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  createdOnUtc: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsDate()
  updatedOnUtc: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  stockQuantity?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  displayOrder?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  color?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  season?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  material?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  style?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pattern?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  occasion?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  sleeve?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  neckline?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  dressLength?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  waistline?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  silhouette?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  decoration?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  closureType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pantClosureType?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pantLength?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  pantStyle?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  fitType?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  published: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  deleted: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isFeatured: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isCallForPricing: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isOnSale: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isNew: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isBestSeller: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isGiftCard: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isDownload: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isRecurring: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isShipEnabled: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isFreeShipping: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isOnHomePage: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  isOnSalePage: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  allowCustomerReviews: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  disableBuyButton: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  disableWishlistButton: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  disableCompareButton: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  showOnHomePage: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  showOnSalePage: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ProductTypeId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  CategoryId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  ProductBrandId?: string;

  @ApiProperty({ required: false, type: () => ProductTypeDto })
  @IsOptional()
  productType?: string | undefined;

  @ApiProperty({ required: false, type: () => CategoryDto })
  @IsOptional()
  category?: string | undefined;

  @ApiProperty({ required: false, type: () => ProductBrandDto })
  @IsOptional()
  productBrand?: string | undefined;

  @ApiProperty({ required: true, type: () => RelatedProductDto })
  @IsOptional()
  productARelations: RelatedProductDto[];

  @ApiProperty({ required: true, type: () => RelatedProductDto })
  @IsOptional()
  productBRelations: RelatedProductDto[];

  @ApiProperty({ required: true, type: () => ProductColorsDto })
  @IsOptional()
  productColors: ProductColorsDto[];

  @ApiProperty({ required: true, type: () => ProductPicturesDto })
  @IsOptional()
  productPictures: ProductPicturesDto[];

  @ApiProperty()
  @IsOptional()
  pictures: string[];

  @ApiProperty({ required: true, type: () => ColorDto })
  @IsOptional()
  colors: ColorDto[];

  @ApiProperty()
  @IsOptional()
  sizes: SizeDto[];

  @ApiProperty()
  @IsOptional()
  relatedProducts: string[];

  @ApiProperty({ required: true, type: () => ProductSizesDto })
  @IsOptional()
  productSizes: ProductSizesDto[];

  @ApiProperty({ required: true, type: () => ProductTagsDto })
  @IsOptional()
  productTags: ProductTagsDto[];

  @ApiProperty({ required: true, type: () => ProductReviewDto })
  @IsOptional()
  productReviews: ProductReviewDto[];

  static fromModel(product: ProductModel): ProductDto {
    return new ProductDto(product);
  }

  constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.shortDescription = product.shortDescription;
    this.price = product.price;
    this.oldPrice = product.oldPrice;
    this.specialPrice = product.specialPrice;
    this.discountPercentage = product.discountPercentage;
    this.pictureUrl = product.pictureUrl;
    this.createdOnUtc = product.createdOnUtc;
    this.updatedOnUtc = product.updatedOnUtc;
    this.stockQuantity = product.stockQuantity;
    this.displayOrder = product.displayOrder;
    this.color = product.color;
    this.size = product.size;
    this.season = product.season;
    this.material = product.material;
    this.ProductTypeId = product.productType?.id;
    this.ProductBrandId = product.productBrand?.id;
    this.productType = product.productType?.name;
    this.productBrand = product.productBrand?.name;
    this.category = product.category?.name;

    this.pictures = product.productPictures.map((productPicture) => {
      return productPicture.picture.url;
    });

    this.colors = product.productColors.map((productColor) => {
      return new ColorDto(productColor);
    });

    this.sizes = product.productSizes.map((productSize) => {
      return new SizeDto(productSize);
    });

    this.productReviews = product.productReviews.map((productReview) => {
      return {
        id: productReview.id,
        rating: productReview.rating,
        comment: productReview.comment,
        userId: productReview.userId,
        productId: productReview.productId,
        createdOnUtc: productReview.createdOnUtc,
      };
    });

    this.relatedProducts = product.productARelations.map((relatedProduct) => {
      return relatedProduct.productB.id;
    });
  }
}
