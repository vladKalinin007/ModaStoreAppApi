import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAddressQuery } from '../query/get-address.query';
import { AddressService } from 'infrastructure/services/customer/address.service';
import { AddressDto } from 'api/dto';

@QueryHandler(GetAddressQuery)
export class GetAddressHandler implements IQueryHandler<GetAddressQuery> {
  constructor(private readonly _addressService: AddressService) {}

  async execute(): Promise<AddressDto> {
    const address = await this._addressService.getUserAddress();
    return AddressDto.toDto(address);
  }
}
