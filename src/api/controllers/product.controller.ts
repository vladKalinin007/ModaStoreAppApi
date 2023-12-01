import { Body, Get, Param, Post, Put, Delete, Query } from '@nestjs/common';
import { BaseController } from './base.controller';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetProductsQuery } from '../../application/use-cases/catalog/product/queries/get-products.query/query/get-products.query';
import { ProductDto } from 'api/dto';
import { GetProductByIdQuery } from 'application/use-cases/catalog/product/queries/get-product-by-id.query/query/get-product-by-id.query';
import { CreateProductCommand } from 'application/use-cases/catalog/product/commands/create-product.command/command/create-product.command';
import { UpdateProductCommand } from 'application/use-cases/catalog/product/commands/delete-product.command/command/update-product.command';
import { DeleteProductCommand } from 'application/use-cases/catalog/product/commands/update-product.command/command/delete-product.command';
import { ProductParams } from 'domain/models/catalog/product-params.model';
import { Pagination } from 'domain/models/common/pagination.model';
import { GetProductColorsQuery } from 'application/use-cases/catalog/product/queries/get-product-colors.query/query/get-product-colors.query';
import { GetProductSizesQuery } from 'application/use-cases/catalog/product/queries/get-product-sizes.query/query/get-products-sizes.query';
import { GetProductAttributesQuery } from 'application/use-cases/catalog/product/queries/get-product-attributes.query/query/get-product-attributes.query';

@ApiTags('Product endpoints')
export class ProductController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/products')
  @ApiQuery({
    type: ProductParams,
    required: false,
  })
  async getProducts(
    @Query() params: ProductParams,
  ): Promise<Pagination<ProductDto>> {
    const products = await this._queryBus.execute(new GetProductsQuery(params));
    return new Pagination<ProductDto>(products, products.length, 1, 9);
  }

  @Get('/products/:id')
  async getProductById(@Param('id') id: string): Promise<ProductDto> {
    return this._queryBus.execute(new GetProductByIdQuery(id));
  }

  @Get('/products/colors/:category')
  async getProductColors(@Param('category') category: string) {
    return await this._queryBus.execute(new GetProductColorsQuery(category));
  }

  @Get('/products/sizes/:category')
  async getProductSizes(@Param('category') category: string) {
    return await this._queryBus.execute(new GetProductSizesQuery(category));
  }

  @Get('/products/attributes/:category')
  async getProductAttributes(@Param('category') category: string) {
    return await this._queryBus.execute(
      new GetProductAttributesQuery(category),
    );
  }

  @Post('/products')
  async createProduct(@Body() product: ProductDto): Promise<ProductDto> {
    return this._commandBus.execute(new CreateProductCommand(product));
  }

  @Put('/products/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: ProductDto,
  ): Promise<ProductDto> {
    return this._commandBus.execute(new UpdateProductCommand(id, product));
  }

  @Delete('/products/:id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this._commandBus.execute(new DeleteProductCommand(id));
  }
}
