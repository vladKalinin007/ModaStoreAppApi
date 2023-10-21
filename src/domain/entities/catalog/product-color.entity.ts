import { Product } from './product.entity';
import { Color } from '../common/color.entity';

export class ProductColor {

    productId: string;
    colorId: string;
    product: Product;
    color: Color;
}
