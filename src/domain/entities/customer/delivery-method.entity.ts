import {BaseEntity} from "../basic/base-entity.entity";

export class DeliveryMethod extends BaseEntity {
    shortName: string;
    deliveryTime: string;
    description: string;
    price: number;
}
