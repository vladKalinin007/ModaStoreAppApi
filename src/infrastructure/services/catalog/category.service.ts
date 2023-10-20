import {Injectable} from "@nestjs/common";
import {Category} from "../../../domain/entities/catalog/category.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private readonly _categoryRepository: Repository<Category>) {}

    getAllCategories(): Promise<Category[]> {
        return this._categoryRepository.find();
    }
}
