import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAddressQuery } from '../query/get-address.query';
import { AddressService } from 'infrastructure/services/customer/address.service';

@QueryHandler(GetAddressQuery)
export class GetAddressHandler implements IQueryHandler<GetAddressQuery> {
  constructor(private readonly _addressService: AddressService) {}

  async execute() {
    const address = await this._addressService.getUserAddress();
    return address;
  }
}
