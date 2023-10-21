import { Address } from './address.entity';
import { DeliveryMethod } from './delivery-method.entity';
import {BaseEntity} from "../basic/base-entity.entity";

export class Order extends BaseEntity {
    buyerEmail: string;
    orderDate: Date;
    shipToAddress: Address;
    deliveryMethod: DeliveryMethod;
    subtotal: number;
    status: string;
    paymentIntentId: string;
}
