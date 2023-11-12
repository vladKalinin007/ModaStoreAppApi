import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ProductParams } from 'domain/models/catalog/product-params.model';
import { createFilter } from 'infrastructure/helpers/filter.helper';
import { createRelations } from 'infrastructure/helpers/relations.helper';

@Injectable()
export class ProductService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getProducts(params: ProductParams) {
    const result = await this._prismaService.product.findMany({
      where: createFilter(params),
      include: createRelations(),
    });

    return result;
  }
}
