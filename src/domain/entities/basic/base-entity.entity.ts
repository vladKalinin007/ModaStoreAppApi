import {Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export abstract class BaseEntity {

    @PrimaryColumn({ type: 'varchar', length: 450 })
    id: string;

    constructor() {
        this.id = uuidv4();
    }
}

