import { ICommand } from '@nestjs/cqrs';
import { RegisterDto } from 'api/dto/identity/register.dto';

export class RegisterCommand implements ICommand {
  constructor(public readonly registerDto: RegisterDto) {}
}
