import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { AppUserDto, OrderDto } from '..';
import { AddressModel } from 'domain/models/customer/address.model';

export class AddressDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  lastName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  street?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  city?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  state?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  zipcode?: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  appUserId: string;

  @ApiProperty({ required: true, type: () => AppUserDto })
  @IsOptional()
  appUser: AppUserDto;

  @ApiProperty({ required: true, type: () => OrderDto })
  @IsOptional()
  orders: OrderDto[];

  static toModel(dto: AddressDto): AddressModel {
    return {
      firstName: dto.firstName,
      lastName: dto.lastName,
      street: dto.street,
      city: dto.city,
      state: dto.state,
      zipcode: dto.zipcode,
      appUserId: dto.appUserId,
    } as AddressModel;
  }

  static toDto(model: AddressModel): AddressDto {
    return {
      firstName: model.firstName,
      lastName: model.lastName,
      street: model.street,
      city: model.city,
      state: model.state,
      zipcode: model.zipcode,
    } as AddressDto;
  }
}
