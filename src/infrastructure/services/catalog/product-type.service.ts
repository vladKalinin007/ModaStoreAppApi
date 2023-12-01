import { PrismaService } from 'infrastructure/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductTypeModel } from 'domain/models/catalog/product-type.model';

@Injectable()
export class ProductTypeService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getAllProductTypes(): Promise<ProductTypeModel[]> {
    return (await this._prismaService.productType.findMany()) as ProductTypeModel[];
  }

  async getProductTypeById(id: string): Promise<ProductTypeModel> {
    return (await this._prismaService.productType.findUnique({
      where: {
        id: id,
      },
    })) as ProductTypeModel;
  }

  async getProductTypeByCategory(
    category: string,
  ): Promise<ProductTypeModel[]> {
    return (await this._prismaService.productType.findMany({
      where: {
        categoryProductTypes: {
          some: {
            category: {
              name: {
                equals: category,
                mode: 'insensitive',
              },
            },
          },
        },
      },
    })) as ProductTypeModel[];
  }
}
