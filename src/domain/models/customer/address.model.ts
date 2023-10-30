import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { AppUserModel } from '../identity/app-user.model';
import { OrderModel } from './order.model';

export class AddressModel {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  zipcode?: string;

  @IsNotEmpty()
  @IsString()
  appUserId: string;

  @IsOptional()
  appUser: AppUserModel;

  @IsOptional()
  orders: OrderModel[];
}
