import { QueryBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { ApiTags } from '@nestjs/swagger';
import { Get, Param } from '@nestjs/common';
import { GetProductTypesQuery } from 'application/use-cases/catalog/product-type/queries/get-product-types.query/query/get-product-types.query';
import { GetProductTypeByIdQuery } from 'application/use-cases/catalog/product-type/queries/get-product-type-by-id.query/query/get-product-type-by-id.query';
import { GetProductTypeByCategoryQuery } from 'application/use-cases/catalog/product-type/queries/get-product-type-by-category.query/query/get-product-type-by-category.query';

@ApiTags('Product-type endpoints')
export class ProductTypeController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('productTypes')
  async getProductTypes() {
    return await this._queryBus.execute(new GetProductTypesQuery());
  }

  @Get('productTypes/:id')
  async getProductTypeById(@Param('id') id: string) {
    return await this._queryBus.execute(new GetProductTypeByIdQuery(id));
  }

  @Get('productTypes/:category')
  async getProductTypeByCategory(@Param('category') category: string) {
    return await this._queryBus.execute(
      new GetProductTypeByCategoryQuery(category),
    );
  }
}
