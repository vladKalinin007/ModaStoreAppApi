import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  token: string;

  constructor(email: string, token: string) {
    this.email = email;
    this.token = token;
  }
}
