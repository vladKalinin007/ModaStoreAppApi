import { BaseController } from './base.controller';
import { QueryBus } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../../application/use-cases/catalog/category/queries/get-categories.query/query/get-categories.query';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
import { CategoryDto } from '../dto/catalog/category.dto';

@ApiTags('Category endpoints')
export class CategoryController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('/categories')
  @ApiResponse({ status: 200, description: 'Returns all categories' })
  public getCategories(): Promise<CategoryDto[]> {
    return this._queryBus.execute(new GetCategoriesQuery());
  }
}
