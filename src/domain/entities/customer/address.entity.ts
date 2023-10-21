import { AppUser }  from "../identity/app-user.entity";
import {BaseEntity} from "../basic/base-entity.entity";

export class Address extends BaseEntity {
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    user: AppUser;
}
