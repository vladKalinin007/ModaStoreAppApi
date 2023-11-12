import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductsQuery } from '../query/get-products.query';
import { ProductService } from '../../../../../../../infrastructure/services/catalog/product.service';
import { ProductDto } from '../../../../../../../api/dto/catalog/product.dto';
import { ProductModel } from 'domain/models/catalog/product.model';

@QueryHandler(GetProductsQuery)
export class GetProductsQueryHandler
  implements IQueryHandler<GetProductsQuery>
{
  constructor(private readonly _productService: ProductService) {}

  async execute(query: GetProductsQuery): Promise<ProductDto[]> {
    const products = (await this._productService.getProducts(
      query.params,
    )) as ProductModel[];

    return products.map((product) => ProductDto.fromModel(product));
  }
}
