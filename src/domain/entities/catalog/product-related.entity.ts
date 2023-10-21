import { Product } from './product.entity';
import {BaseEntity} from "../basic/base-entity.entity";

export class RelatedProduct extends BaseEntity {

    product: Product;
    relatedProduct: Product;
}
