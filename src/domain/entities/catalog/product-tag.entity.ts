import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import {Tag} from "../common/tag.entity";


@Entity({ name: 'ProductTags'})
export class ProductTag {
    @PrimaryColumn()
    productId: string;

    @PrimaryColumn()
    tagId: string;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Tag, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'tagId' })
    tag: Tag;
}
