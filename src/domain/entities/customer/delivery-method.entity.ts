import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'DeliveryMethods'})
export class DeliveryMethod extends BaseEntity {

    @Column()
    shortName: string;

    @Column()
    deliveryTime: string;

    @Column()
    description: string;

    @Column({ type: 'decimal', precision: 18, scale: 2 })
    price: number;
}
