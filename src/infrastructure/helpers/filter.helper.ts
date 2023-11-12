import { Prisma } from '@prisma/client';
import { ProductParams } from 'domain/models/catalog/product-params.model';

export function createFilter(params: ProductParams) {
  const filter: any = {};

  if (params.pageIndex && params.pageSize) {
    filter.skip = (params.pageIndex - 1) * params.pageSize;
    filter.take = params.pageSize;
  }

  if (params.id) {
    filter.id = params.id;
  }

  if (params.brandId) {
    filter.brandId = params.brandId;
  }

  if (params.typeId) {
    filter.typeId = params.typeId;
  }

  if (params.categoryId) {
    filter.categoryId = params.categoryId;
  }

  if (params.colorId) {
    filter.productColors = {
      some: {
        color: {
          id: params.colorId,
        },
      },
    };
  }

  if (params.sizeId) {
    filter.productSizes = {
      some: {
        size: {
          id: params.sizeId,
        },
      },
    };
  }

  if (params.material) {
    filter.material = {
      contains: params.material,
    };
  }

  if (params.style) {
    filter.style = {
      contains: params.style,
    };
  }

  if (params.pattern) {
    filter.pattern = {
      contains: params.pattern,
    };
  }

  if (params.season) {
    filter.season = {
      equals: params.season,
    };
  }

  if (params.isBestSeller) {
    filter.isBestSeller = !!params.isBestSeller;
  }

  if (params.isNew) {
    filter.isNew = !!params.isNew;
  }

  if (params.isOnSale) {
    filter.isOnSale = !!params.isOnSale;
  }

  if (params.search) {
    filter.name = {
      contains: params.search,
      mode: 'insensitive',
    };
  }

  if (params.minPrice) {
    filter.price = {
      gte: new Prisma.Decimal(+params.minPrice),
    };
  }

  if (params.maxPrice) {
    filter.price = {
      lte: new Prisma.Decimal(+params.maxPrice),
    };
  }

  return filter;
}
