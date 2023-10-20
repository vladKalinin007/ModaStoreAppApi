import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'Categories'})
export class Category extends BaseEntity {

    @Column({ length: 255, nullable: true })
    name: string;

    @Column({ type: 'text', nullable: true })
    pictureUrl: string;

    @Column({ nullable: true })
    showOnHomePage: boolean;

}

