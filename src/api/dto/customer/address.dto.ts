import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { AppUserDto, OrderDto } from '..';

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
}
