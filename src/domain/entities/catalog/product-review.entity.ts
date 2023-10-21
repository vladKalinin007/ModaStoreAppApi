import {BaseEntity} from "../basic/base-entity.entity";
import {Product} from "./product.entity";
import {AppUser} from "../identity/app-user.entity";

export class ProductReview extends BaseEntity {

    rating: number;
    comment: string;
    createdOnUtc: Date;
    user: AppUser;
    product: Product;
}
