import { Body, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { BaseController } from './base.controller';
import { ApiTags } from '@nestjs/swagger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetProductsQuery } from '../../application/use-cases/catalog/product/queries/get-products.query/query/get-products.query';
import { ProductDto } from 'api/dto';
import { GetProductByIdQuery } from 'application/use-cases/catalog/product/queries/get-product-by-id.query/query/get-product-by-id.query';
import { CreateProductCommand } from 'application/use-cases/catalog/product/commands/create-product.command/command/create-product.command';
import { UpdateProductCommand } from 'application/use-cases/catalog/product/commands/delete-product.command/command/update-product.command';
import { DeleteProductCommand } from 'application/use-cases/catalog/product/commands/update-product.command/command/delete-product.command';

@ApiTags('Product endpoints')
export class ProductController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('/products')
  public getProducts(): Promise<ProductDto[]> {
    return this._queryBus.execute(new GetProductsQuery());
  }

  @Get('/products/:id')
  async getProductById(@Param('id') id: string): Promise<ProductDto> {
    return this._queryBus.execute(new GetProductByIdQuery(id));
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
