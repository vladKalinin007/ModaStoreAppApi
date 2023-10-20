import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import {Size} from "../common/size.entity";


@Entity({ name: 'ProductSizes'})
export class ProductSize {
    @PrimaryColumn()
    productId: string;

    @PrimaryColumn()
    sizeId: string;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Size, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sizeId' })
    size: Size;
}
