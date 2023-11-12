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
