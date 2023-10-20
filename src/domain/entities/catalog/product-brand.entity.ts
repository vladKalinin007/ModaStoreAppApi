import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'ProductBrands'})
export class ProductBrand extends BaseEntity {

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    pictureUrl: string;
}
