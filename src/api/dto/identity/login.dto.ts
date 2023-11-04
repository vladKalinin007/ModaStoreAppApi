import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'John Doe' })
  email: string;
  @ApiProperty({ example: 'johndoe' })
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
