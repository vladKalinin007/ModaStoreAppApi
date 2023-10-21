import { Product } from './product.entity';
import {Size} from "../common/size.entity";


export class ProductSize {
    productId: string;
    sizeId: string;
    product: Product;
    size: Size;
}
