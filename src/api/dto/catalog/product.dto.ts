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
import { ProductModel } from 'domain/models/catalog/product.model';
import { SizeModel } from 'domain/models/common/size.model';
import { ColorModel } from 'domain/models/common/color.model';

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
  oldPrice?: number;

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

  @IsOptional()
  productType?: string | undefined;

  @IsOptional()
  category?: string | undefined;

  @IsOptional()
  productBrand?: string | undefined;

  @IsOptional()
  productARelations: RelatedProductDto[];

  @IsOptional()
  productBRelations: RelatedProductDto[];

  @IsOptional()
  productColors: ProductColorsDto[];

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

  @IsOptional()
  productSizes: ProductSizesDto[];

  @IsOptional()
  productTags: ProductTagsDto[];

  @IsOptional()
  productReviews: ProductReviewDto[];

  static fromModel(product: ProductModel): ProductDto {
    return new ProductDto(product);
  }

  static toModel(product: ProductDto) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      shortDescription: product.shortDescription,
      price: product.price,
      oldPrice: new Prisma.Decimal(product.oldPrice),
      specialPrice: product.specialPrice,
      discountPercentage: product.discountPercentage,
      pictureUrl: product.pictureUrl,
      createdOnUtc: product.createdOnUtc,
      updatedOnUtc: product.updatedOnUtc,
      stockQuantity: product.stockQuantity,
      displayOrder: product.displayOrder,
      color: product.color,
      size: product.size,
      season: product.season,
      material: product.material,
      style: product.style,
      pattern: product.pattern,
      occasion: product.occasion,
      sleeve: product.sleeve,
      neckline: product.neckline,
      dressLength: product.dressLength,
      waistline: product.waistline,
      silhouette: product.silhouette,
      decoration: product.decoration,
      closureType: product.closureType,
      pantClosureType: product.pantClosureType,
      pantLength: product.pantLength,
      pantStyle: product.pantStyle,
      fitType: product.fitType,
      published: product.published,
      deleted: product.deleted,
      isFeatured: product.isFeatured,
      isCallForPricing: product.isCallForPricing,
      isOnSale: product.isOnSale,
      isNew: product.isNew,
      isBestSeller: product.isBestSeller,
      isGiftCard: product.isGiftCard,
      isDownload: product.isDownload,
      isRecurring: product.isRecurring,
      isShipEnabled: product.isShipEnabled,
      isFreeShipping: product.isFreeShipping,
      isOnHomePage: product.isOnHomePage,
      isOnSalePage: product.isOnSalePage,
      allowCustomerReviews: product.allowCustomerReviews,
      disableBuyButton: product.disableBuyButton,
      disableWishlistButton: product.disableWishlistButton,
      disableCompareButton: product.disableCompareButton,
      showOnHomePage: product.showOnHomePage,
      showOnSalePage: product.showOnSalePage,
      ProductTypeId: product.ProductTypeId,
      CategoryId: product.CategoryId,
      ProductBrandId: product.ProductBrandId,

      colors: product.colors.map((color) => {
        return {
          id: color.id,
          name: color.name,
          colorCode: color.colorCode,
        } as ColorModel;
      }),

      sizes: product.sizes.map((size) => {
        return {
          id: size.id,
          name: size.name,
        } as SizeModel;
      }),

      pictures: product.pictures.map((picture) => picture),

      relatedProducts: product.relatedProducts.map((id) => id),
    } as ProductModel;
  }

  constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.shortDescription = product.shortDescription;
    this.price = product.price;
    this.oldPrice = product.oldPrice.toNumber();
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
    this.isBestSeller = product.isBestSeller;
    this.isNew = product.isNew;
    this.isOnSale = product.isOnSale;

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
