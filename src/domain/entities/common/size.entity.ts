import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";
import {ProductSize} from "../catalog/product-size.entity";
import {Product} from "../catalog/product.entity";

@Entity({ name: 'Sizes'})
export class Size extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => ProductSize, productSize => productSize.size)
    productSizes: ProductSize[];

    @OneToMany(() => Product, product => product.size)
    products: Product[];
}
