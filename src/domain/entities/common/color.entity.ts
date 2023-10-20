import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'Colors'})
export class Color extends BaseEntity {

    @Column({ length: 255 })
    name: string;

    @Column({ type: 'text' })
    colorCode: string;
}
