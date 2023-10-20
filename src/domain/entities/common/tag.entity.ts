import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'Tags'})
export class Tag extends BaseEntity {
    @Column()
    name: string;
}
