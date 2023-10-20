import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.entity';
import { ProductType } from './product-type.entity';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'CategoryProductTypes'})
export class CategoryProductType extends BaseEntity {

    @ManyToOne(() => Category, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'CategoryId' })
    category: Category;

    @ManyToOne(() => ProductType, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProductTypeId' })
    productType: ProductType;
}
