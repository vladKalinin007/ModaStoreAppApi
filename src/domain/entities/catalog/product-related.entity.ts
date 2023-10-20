import {Entity, ManyToOne, JoinColumn} from 'typeorm';
import { Product } from './product.entity';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'RelatedProducts'})
export class RelatedProduct extends BaseEntity {

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProductId' })
    product: Product;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'RelatedProductId' })
    relatedProduct: Product;
}
