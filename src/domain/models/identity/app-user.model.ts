import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ProductReviewModel } from '../catalog/product-review.model';
import { AddressModel } from '../customer/address.model';

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
  @IsOptional()
  normalizedUserName?: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  normalizedEmail: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  emailConfirmed: boolean;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  passwordHash: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  securityStamp: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  concurrencyStamp: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  phoneNumberConfirmed: boolean;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  twoFactorEnabled: boolean;

  @IsOptional()
  @IsDate()
  @IsOptional()
  lockoutEnd?: Date;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  lockoutEnabled: boolean;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  accessFailedCount: number;

  @IsOptional()
  productReviews: ProductReviewModel[];

  @IsOptional()
  addresses: AddressModel[];

  constructor(
    id: string,
    displayName: string,
    userName: string,
    normalizedUserName: string,
    email: string,
    normalizedEmail: string,
    emailConfirmed: boolean,
    passwordHash: string,
    securityStamp: string,
    concurrencyStamp: string,
    phoneNumber: string,
    phoneNumberConfirmed: boolean,
    twoFactorEnabled: boolean,
    lockoutEnd: Date,
    lockoutEnabled: boolean,
    accessFailedCount: number,
    productReviews?: ProductReviewModel[],
    addresses?: AddressModel[],
  ) {
    this.id = id;
    this.displayName = displayName;
    this.userName = userName;
    this.normalizedUserName = normalizedUserName;
    this.email = email;
    this.normalizedEmail = normalizedEmail;
    this.emailConfirmed = emailConfirmed;
    this.passwordHash = passwordHash;
    this.securityStamp = securityStamp;
    this.concurrencyStamp = concurrencyStamp;
    this.phoneNumber = phoneNumber;
    this.phoneNumberConfirmed = phoneNumberConfirmed;
    this.twoFactorEnabled = twoFactorEnabled;
    this.lockoutEnd = lockoutEnd;
    this.lockoutEnabled = lockoutEnabled;
    this.accessFailedCount = accessFailedCount;
    this.productReviews = productReviews;
    this.addresses = addresses;
  }
}
