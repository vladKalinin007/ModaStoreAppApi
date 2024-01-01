import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ProductParams } from 'domain/models/catalog/product-params.model';
import { createFilter } from 'infrastructure/helpers/filter.helper';
import { createRelations } from 'infrastructure/helpers/relations.helper';
import { ProductModel } from 'domain/models/catalog/product.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getProducts(params: ProductParams) {
    const orderBy = params.sort ? { [params.sort]: 'asc' } : undefined;
    const result = await this._prismaService.product.findMany({
      skip: params.pageIndex ? (+params.pageIndex - 1) * +params.pageSize : 0,
      take: params.pageSize ? +params.pageSize : 9,
      orderBy: orderBy,
      where: createFilter(params),
      include: createRelations(),
    });

    return result;
  }

  async createProduct(product: ProductModel) {
    const result = (await this._prismaService.product.create({
      data: {
        id: uuid(),
        name: product.name,
        description: product.description,
        shortDescription: product.shortDescription,
        price: product.price,
        oldPrice: product.oldPrice,
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

        productPictures: {
          create: product.pictures.map((productPicture) => ({
            picture: {
              create: {
                id: uuid(),
                url: productPicture,
                pictureType: 'Product',
                pictureTypeId: '1',
              },
            },
          })),
        },

        productColors: {
          create: product.colors.map((color) => ({
            color: {
              connect: {
                id: color.id,
              },
            },
          })),
        },

        productSizes: {
          create: product.sizes.map((size) => ({
            size: {
              connect: {
                id: size.id,
              },
            },
          })),
        },

        productARelations: {
          create: product.relatedProducts.map((relatedProductId) => ({
            productB: {
              connect: {
                id: relatedProductId,
              },
            },
          })),
        },
      },
    })) as ProductModel;

    return result;
  }
}
