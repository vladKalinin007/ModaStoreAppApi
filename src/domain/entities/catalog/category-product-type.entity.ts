import { Category } from './category.entity';
import { ProductType } from './product-type.entity';
import {BaseEntity} from "../basic/base-entity.entity";

export class CategoryProductType extends BaseEntity {

    category: Category;

    productType: ProductType;
}
