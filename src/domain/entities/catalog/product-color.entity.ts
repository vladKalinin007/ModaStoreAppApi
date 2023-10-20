import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import { Color } from '../common/color.entity';

@Entity({ name: 'ProductColors'})
export class ProductColor {
    @PrimaryColumn()
    productId: string;

    @PrimaryColumn()
    colorId: string;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Color, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'colorId' })
    color: Color;
}
