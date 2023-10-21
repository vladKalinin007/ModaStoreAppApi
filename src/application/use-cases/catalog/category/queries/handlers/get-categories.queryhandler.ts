import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetCategoriesQuery} from "../models/get-category.query";
import {CategoryService} from "../../../../../../infrastructure/services/catalog/category.service";
import {CategoryDto} from "../../../../../../api/dto/catalog/category.dto";
import {Category} from "../../../../../../domain/entities/catalog/category.entity";
@QueryHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler implements IQueryHandler<GetCategoriesQuery, CategoryDto[]> {

    constructor(private _categoryService: CategoryService) {}

    async execute(query: GetCategoriesQuery): Promise<CategoryDto[]> {
        // const categories: Category[] = await this._categoryService.getAllCategories();
        const categories = await this._categoryService.getCategories();
        return categories.map(category => CategoryDto.from(category));
    }


}
