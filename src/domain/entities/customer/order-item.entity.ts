import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'OrderItems'})
export class OrderItem extends BaseEntity {

    @Column()
    itemOrdered_ProductItemId: string;

    @Column()
    itemOrdered_ProductName: string;

    @Column()
    itemOrdered_PictureUrl: string;

    @Column({ type: 'decimal', precision: 18, scale: 2 })
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'OrderId' })
    order: Order;
}
