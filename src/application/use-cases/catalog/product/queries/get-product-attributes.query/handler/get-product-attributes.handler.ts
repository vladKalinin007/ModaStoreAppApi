import { QueryHandler } from '@nestjs/cqrs';
import { GetProductAttributesQuery } from '../query/get-product-attributes.query';
import { ProductAttributesService } from 'infrastructure/services/catalog/product-attributes.service';

@QueryHandler(GetProductAttributesQuery)
export class GetProductAttributesHandler {
  constructor(private readonly _productAttributes: ProductAttributesService) {}

  async execute(query: GetProductAttributesQuery) {
    return await this._productAttributes.getProductAttributes(query.category);
  }
}
