import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesQuery } from '../query/get-categories.query';
import { CategoryService } from '../../../../../../../infrastructure/services/catalog/category.service';
import { CategoryDto } from '../../../../../../../api/dto/catalog/category.dto';

@QueryHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler
  implements IQueryHandler<GetCategoriesQuery, CategoryDto[]>
{
  constructor(private _categoryService: CategoryService) {}

  async execute(): Promise<CategoryDto[]> {
    const categories = await this._categoryService.getCategories();
    return categories.map((category) => CategoryDto.from(category));
  }
}
