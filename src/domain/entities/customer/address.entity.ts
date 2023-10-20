import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AppUser }  from "../identity/app-user.entity";
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'Addresses'})
export class Address extends BaseEntity {

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: true })
    street: string;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    state: string;

    @Column({ nullable: true })
    zipcode: string;

    @ManyToOne(() => AppUser, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'AppUserId' })
    user: AppUser;
}
