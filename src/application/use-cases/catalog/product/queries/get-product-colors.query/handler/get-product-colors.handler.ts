import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductColorsQuery } from '../query/get-product-colors.query';
import { ProductAttributesService } from 'infrastructure/services/catalog/product-attributes.service';

@QueryHandler(GetProductColorsQuery)
export class GetProductColorsHandler
  implements IQueryHandler<GetProductColorsQuery>
{
  constructor(private readonly _productAttributes: ProductAttributesService) {}

  async execute(query: GetProductColorsQuery) {
    return await this._productAttributes.getProductColors(query.category);
  }
}
