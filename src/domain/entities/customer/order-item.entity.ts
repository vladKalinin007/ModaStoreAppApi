import { Order } from './order.entity';
import {BaseEntity} from "../basic/base-entity.entity";

export class OrderItem extends BaseEntity {
    itemOrdered_ProductItemId: string;
    itemOrdered_ProductName: string;
    itemOrdered_PictureUrl: string;
    price: number;
    quantity: number;
    order: Order;
}
