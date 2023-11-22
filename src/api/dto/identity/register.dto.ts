import { ApiProperty } from '@nestjs/swagger';
import { AppUserModel } from 'domain/models/identity/app-user.model';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class RegisterDto {
  @ApiProperty({ example: 'JohnDoe' })
  displayName: string;

  @ApiProperty({ example: 'John Doe' })
  userName: string;

  @ApiProperty({ example: 'vladkalinindev@gmail.com' })
  email: string;

  @ApiProperty({ example: '89099999236' })
  phone: string;

  @ApiProperty({ example: '123sadf4567#85' })
  password: string;

  static toModel(registerDto: RegisterDto): AppUserModel {
    return {
      id: uuidv4(),
      displayName: registerDto.displayName,
      userName: registerDto.userName,
      normalizedUserName: registerDto.userName.toUpperCase(),
      email: registerDto.email,
      normalizedEmail: registerDto.email.toUpperCase(),
      emailConfirmed: false,
      passwordHash: bcrypt.hashSync(registerDto.password, 10),
      securityStamp: uuidv4(),
      concurrencyStamp: uuidv4(),
      phoneNumber: registerDto.phone || '0',
      phoneNumberConfirmed: false,
      twoFactorEnabled: false,
      lockoutEnd: new Date(),
      lockoutEnabled: false,
      accessFailedCount: 0,
      productReviews: [],
      addresses: [],
    };
  }
}

export class RegisterResponseDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }
}
