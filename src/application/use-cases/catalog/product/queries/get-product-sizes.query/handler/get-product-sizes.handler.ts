import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProductAttributesService } from 'infrastructure/services/catalog/product-attributes.service';
import { GetProductSizesQuery } from '../query/get-products-sizes.query';

@QueryHandler(GetProductSizesQuery)
export class GetProductSizesHandler
  implements IQueryHandler<GetProductSizesQuery>
{
  constructor(private readonly _productAttributes: ProductAttributesService) {}

  async execute(query: GetProductSizesQuery) {
    return await this._productAttributes.getProductSizes(query.category);
  }
}
