import {BaseEntity} from "../basic/base-entity.entity";
import {ProductSize} from "../catalog/product-size.entity";
import {Product} from "../catalog/product.entity";


export class Size extends BaseEntity {
    name: string;
    productSizes: ProductSize[];
    products: Product[];
}
