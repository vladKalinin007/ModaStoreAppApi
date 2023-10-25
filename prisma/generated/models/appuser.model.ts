import { Prisma } from "@prisma/client";
import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsDate, IsNumber } from "class-validator";
import { ProductReviewModel, AddressModel } from "./";

export class AppUserModel {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    displayName: string;

    @IsOptional()
    @IsString()
    userName?: string;

    @IsOptional()
    @IsString()
    normalizedUserName?: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    normalizedEmail: string;

    @IsNotEmpty()
    @IsBoolean()
    emailConfirmed: boolean;

    @IsNotEmpty()
    @IsString()
    passwordHash: string;

    @IsNotEmpty()
    @IsString()
    securityStamp: string;

    @IsNotEmpty()
    @IsString()
    concurrencyStamp: string;

    @IsOptional()
    @IsString()
    phoneNumber?: string;

    @IsNotEmpty()
    @IsBoolean()
    phoneNumberConfirmed: boolean;

    @IsNotEmpty()
    @IsBoolean()
    twoFactorEnabled: boolean;

    @IsOptional()
    @IsDate()
    lockoutEnd?: Date;

    @IsNotEmpty()
    @IsBoolean()
    lockoutEnabled: boolean;

    @IsNotEmpty()
    @IsNumber()
    accessFailedCount: number;

    @IsOptional()
    productReviews: ProductReviewModel[];

    @IsOptional()
    addresses: AddressModel[];
}
