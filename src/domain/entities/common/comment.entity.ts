import {Product} from "../catalog/product.entity";
import {AppUser} from "../identity/app-user.entity";


export class Comment {

    id: string;
    text: string;
    createdOnUtc: Date;
    product: Product;
    userId: string;
    appUser: AppUser;
}
