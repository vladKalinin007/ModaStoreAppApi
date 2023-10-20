import { Entity, Column } from 'typeorm';
import {BaseEntity} from "../basic/base-entity.entity";

@Entity({ name: 'AppUsers'})
export class AppUser extends BaseEntity {

    @Column()
    displayName: string;

    @Column({ nullable: true })
    userName: string;

    @Column({ nullable: true })
    normalizedUserName: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    normalizedEmail: string;

    @Column({ nullable: true })
    emailConfirmed: boolean;

    @Column({ nullable: true })
    passwordHash: string;

    @Column({ nullable: true })
    securityStamp: string;

    @Column({ nullable: true })
    concurrencyStamp: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ nullable: true })
    phoneNumberConfirmed: boolean;

    @Column({ nullable: true })
    twoFactorEnabled: boolean;

    @Column({ nullable: true })
    lockoutEnd: Date;

    @Column({ nullable: true })
    lockoutEnabled: boolean;

    @Column({ nullable: true })
    accessFailedCount: number;
}
