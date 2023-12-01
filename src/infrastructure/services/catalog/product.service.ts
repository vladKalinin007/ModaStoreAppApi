import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ProductParams } from 'domain/models/catalog/product-params.model';
import { createFilter } from 'infrastructure/helpers/filter.helper';
import { createRelations } from 'infrastructure/helpers/relations.helper';

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
}
