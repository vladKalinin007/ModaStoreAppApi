import { Product } from './product.entity';
import {Picture} from "../common/picture.entity";


export class ProductPicture  {

    productId: string;
    pictureId: string;
    product: Product;
    picture: Picture;
}
