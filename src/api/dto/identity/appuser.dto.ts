import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ProductReviewDto, AddressDto } from '..';
import { AppUserModel } from 'domain/models/identity/app-user.model';

export class AppUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  userName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  normalizedUserName?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  normalizedEmail: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  emailConfirmed: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  passwordHash: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  securityStamp: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  concurrencyStamp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  phoneNumberConfirmed: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  twoFactorEnabled: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  lockoutEnd?: Date;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsBoolean()
  lockoutEnabled: boolean;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  accessFailedCount: number;

  @ApiProperty({ required: true, type: () => ProductReviewDto })
  @IsOptional()
  productReviews: ProductReviewDto[];

  @ApiProperty({ required: true, type: () => AddressDto })
  @IsOptional()
  addresses: AddressDto[];

  static toModel(dto: AppUserDto): AppUserModel {
    return {
      ...dto,
      productReviews: [],
      addresses: [],
    };
  }

  static fromModel(model: AppUserModel): AppUserDto {
    return {
      ...model,
      productReviews: [],
      addresses: [],
    };
  }
}
