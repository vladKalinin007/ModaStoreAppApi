import { ICommand } from '@nestjs/cqrs';
import { AddressDto } from 'api/dto';

export class UpdateAddressCommand implements ICommand {
  constructor(public readonly addressDto: AddressDto) {}
}
