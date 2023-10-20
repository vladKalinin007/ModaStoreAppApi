import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'ProductTypes'})
export class ProductType extends BaseEntity {

    @Column({ length: 255, nullable: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;
}
