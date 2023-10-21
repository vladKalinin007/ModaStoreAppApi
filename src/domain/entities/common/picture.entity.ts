import {BaseEntity} from "../basic/base-entity.entity";
import {Product} from "../catalog/product.entity";
import {ProductPicture} from "../catalog/product-pictures.entity";

export class Picture extends BaseEntity {

    url: string;
    pictureType: string;
    pictureTypeId: string;
    products: Product[];
    productPictures: ProductPicture[];
}
