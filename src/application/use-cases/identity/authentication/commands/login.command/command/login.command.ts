import { ICommand } from '@nestjs/cqrs';
import { LoginDto } from 'api/dto/identity/login.dto';

export class LoginCommand implements ICommand {
  readonly email: string;
  readonly password: string;

  constructor(public readonly loginDto: LoginDto) {
    this.email = loginDto.email;
    this.password = loginDto.password;
  }
}
