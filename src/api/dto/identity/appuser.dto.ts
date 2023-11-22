import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
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
  phone: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  email: string;

  static toDto(model: AppUserModel): AppUserDto {
    return {
      id: model.id,
      displayName: model.displayName,
      userName: model.userName,
      phone: model.phoneNumber,
      email: model.email,
    };
  }

  static toModel(user: AppUserDto): AppUserModel {
    return {
      displayName: user.displayName,
      phoneNumber: user.phone,
      email: user.email,
    } as AppUserModel;
  }
}
