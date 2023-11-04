import { ApiProperty } from '@nestjs/swagger';
import { AppUserModel } from 'domain/models/identity/app-user.model';

export class RegisterDto {
  @ApiProperty({ example: 'John Doe' })
  displayName: string;
  @ApiProperty({ example: 'johndoe' })
  userName: string;
  @ApiProperty({ example: '*12345678' })
  email: string;
  @ApiProperty({ example: '12345678' })
  password: string;

  toModel(): AppUserModel {
    return new AppUserModel();
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
