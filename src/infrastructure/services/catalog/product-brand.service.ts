import { Injectable } from '@nestjs/common';
import { ProductBrandModel } from 'domain/models/catalog/product-brand.model';
import { PrismaService } from 'infrastructure/database/prisma.service';

@Injectable()
export class ProductBrandSerivce {
  constructor(private readonly _prismaService: PrismaService) {}

  async getAllProductBrands(): Promise<ProductBrandModel[]> {
    return (await this._prismaService.productBrand.findMany()) as ProductBrandModel[];
  }
}
