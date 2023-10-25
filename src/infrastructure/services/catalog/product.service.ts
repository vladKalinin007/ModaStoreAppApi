import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getAllProducts() {
    return this._prismaService.product.findMany({
      include: {
        productType: true,
        productBrand: true,
        category: true,
        productReviews: true,
        productARelations: {
          select: {
            productB: true,
            productA: true,
          },
        },
        productPictures: {
          include: {
            picture: true,
          },
        },
        productColors: {
          include: {
            color: true,
          },
        },
        productSizes: {
          include: {
            size: true,
          },
        },
      },
    });
  }
}
