import {Category} from "../../../domain/entities/catalog/category.entity";

export class CategoryDto  {

    id: string;

    name: string;

    pictureUrl: string;

    showOnHomePage: boolean;

    constructor(id: string, name: string, pictureUrl: string, showOnHomePage: boolean) {
        this.id = id;
        this.name = name;
        this.pictureUrl = pictureUrl;
        this.showOnHomePage = showOnHomePage;
    }

    static from(category: Category): CategoryDto {
        return new CategoryDto(category.id, category.name, category.pictureUrl, category.showOnHomePage);
    }
}
