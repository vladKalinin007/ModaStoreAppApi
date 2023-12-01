import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductTypeByIdQuery } from '../query/get-product-type-by-id.query';
import { ProductTypeService } from 'infrastructure/services/catalog/product-type.service';

@QueryHandler(GetProductTypeByIdQuery)
export class GetProductTypeByIdHandler
  implements IQueryHandler<GetProductTypeByIdQuery>
{
  constructor(private readonly _productTypeService: ProductTypeService) {}

  async execute(query: GetProductTypeByIdQuery) {
    const productType = await this._productTypeService.getProductTypeById(
      query.id,
    );
    return productType;
  }
}
