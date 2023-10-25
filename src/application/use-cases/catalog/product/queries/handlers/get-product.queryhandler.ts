import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductQuery } from '../models/get-product.query';
import { ProductService } from '../../../../../../infrastructure/services/catalog/product.service';
import { ProductDto } from '../../../../../../../prisma/generated/dtos';
import { ProductModel } from '../../../../../../../prisma/generated/models';

@QueryHandler(GetProductQuery)
export class GetProductQueryHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly _productService: ProductService) {}

  async execute(): Promise<ProductDto[]> {
    const products =
      (await this._productService.getAllProducts()) as unknown as ProductModel[];

    return products.map((product) => ProductDto.fromModel(product));
  }
}
