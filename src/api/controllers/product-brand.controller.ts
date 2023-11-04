import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { QueryBus } from '@nestjs/cqrs';
import { Get, Param } from '@nestjs/common';
import { GetProductBrandsQuery } from 'application/use-cases/catalog/product-brand/queries/get-product-brands.query/query/get-product-brands.query';
import { GetProductBrandByIdQuery } from 'application/use-cases/catalog/product-brand/queries/get-product-brand-by-id.query/query/get-product-brand-by-id.query';

@ApiTags('ProductBrand endpoints')
export class ProductBrandController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('productBrands')
  async getProductBrands() {
    return await this._queryBus.execute(new GetProductBrandsQuery());
  }

  @Get('productBrands/:id')
  async getProductBrandById(@Param('id') id: string) {
    return await this._queryBus.execute(new GetProductBrandByIdQuery(id));
  }
}
