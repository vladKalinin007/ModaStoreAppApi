import { ICommand } from '@nestjs/cqrs';
import { AppUserDto } from 'api/dto';

export class UpdateUserCommand implements ICommand {
  constructor(public readonly userDto: AppUserDto) {}
}
