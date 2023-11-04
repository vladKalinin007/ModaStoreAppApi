import { BaseController } from './base.controller';
import { QueryBus } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../../application/use-cases/catalog/category/queries/get-categories.query/query/get-categories.query';
import { ApiTags } from '@nestjs/swagger';
import { Get, Param } from '@nestjs/common';
import { CategoryDto } from '../dto/catalog/category.dto';
import { GetCategoryByIdQuery } from 'application/use-cases/catalog/category/queries/get-category-by-id.query/query/get-category-by-id.query';

@ApiTags('Category endpoints')
export class CategoryController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('/categories')
  async getCategories(): Promise<CategoryDto[]> {
    return await this._queryBus.execute(new GetCategoriesQuery());
  }

  @Get('/categories/:id')
  async getCategoryById(@Param('id') id: string): Promise<CategoryDto> {
    return await this._queryBus.execute(new GetCategoryByIdQuery(id));
  }
}
