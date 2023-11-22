import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAddressCommand } from '../command/update-address.command';
import { AddressService } from 'infrastructure/services/customer/address.service';
import { AddressDto } from 'api/dto';

@CommandHandler(UpdateAddressCommand)
export class UpdateAddressHandler
  implements ICommandHandler<UpdateAddressCommand>
{
  constructor(private readonly _addressService: AddressService) {}

  async execute(command: UpdateAddressCommand): Promise<AddressDto> {
    const updatingAddress = AddressDto.toModel(command.addressDto);
    const updatedAddress =
      await this._addressService.updateAddress(updatingAddress);
    return AddressDto.toDto(updatedAddress);
  }
}
