import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Product} from "../catalog/product.entity";
import {AppUser} from "../identity/app-user.entity";


@Entity({ name: 'Comments'})
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdOnUtc: Date;

    @ManyToOne(() => Product, { onDelete: 'CASCADE' })
    product: Product;

    @Column()
    userId: string;

    @ManyToOne(() => AppUser, { onDelete: 'CASCADE' })
    appUser: AppUser;
}
