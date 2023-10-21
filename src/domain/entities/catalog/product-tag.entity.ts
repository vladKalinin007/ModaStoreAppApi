
import { Product } from './product.entity';
import {Tag} from "../common/tag.entity";


export class ProductTag {
    productId: string;
    tagId: string;
    product: Product;
    tag: Tag;
}
