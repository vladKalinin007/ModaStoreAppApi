import {Entity, Column, OneToMany, JoinTable, ManyToMany} from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";
import {Product} from "../catalog/product.entity";
import {ProductPicture} from "../catalog/product-pictures.entity";

@Entity({ name: 'Pictures'})
export class Picture extends BaseEntity {
    @Column()
    url: string;

    @Column()
    pictureType: string;

    @Column()
    pictureTypeId: string;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];

    @OneToMany(() => ProductPicture, productPicture => productPicture.picture)
    productPictures: ProductPicture[];
}
