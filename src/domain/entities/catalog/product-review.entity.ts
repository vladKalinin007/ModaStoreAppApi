import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";
import {Product} from "./product.entity";
import {AppUser} from "../identity/app-user.entity";

@Entity({ name: 'ProductReviews'})
export class ProductReview extends BaseEntity {

    @Column()
    rating: number;

    @Column()
    comment: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdOnUtc: Date;

    @ManyToOne(() => AppUser, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'UserId' })
    user: AppUser;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProductId' })
    product: Product;
}
