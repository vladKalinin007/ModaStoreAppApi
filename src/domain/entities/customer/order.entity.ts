import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Address } from './address.entity';
import { DeliveryMethod } from './delivery-method.entity';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'Orders'})
export class Order extends BaseEntity {

    @Column()
    buyerEmail: string;

    @Column()
    orderDate: Date;

    @ManyToOne(() => Address, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ShipToAddressId' })
    shipToAddress: Address;

    @ManyToOne(() => DeliveryMethod, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'DeliveryMethodId' })
    deliveryMethod: DeliveryMethod;

    @Column({ type: 'decimal', precision: 18, scale: 2 })
    subtotal: number;

    @Column()
    status: string;

    @Column({ nullable: true })
    paymentIntentId: string;
}
