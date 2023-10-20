import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';
import {Picture} from "../common/picture.entity";


@Entity({ name: 'ProductPictures'})
export class ProductPicture  {
    @PrimaryColumn()
    productId: string;

    @PrimaryColumn()
    pictureId: string;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'productId' })
    product: Product;

    @ManyToOne(() => Picture, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'pictureId' })
    picture: Picture;
}
