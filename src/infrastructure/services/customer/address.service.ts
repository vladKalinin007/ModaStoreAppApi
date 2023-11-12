import { Injectable } from '@nestjs/common';
import { AddressModel } from 'domain/models/customer/address.model';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { CurrentUserService } from '../identity/current-user.service';

@Injectable()
export class AddressService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _currentUser: CurrentUserService,
  ) {}

  async getUserAddress() {
    const id: string = await this._currentUser.get();
    return (await this._prismaService.address.findFirst({
      where: { appUserId: id },
    })) as AddressModel;
  }

  async createAddress(address: AddressModel) {
    return await this._prismaService.address.create({
      data: {
        id: address.id,
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        appUserId: address.appUserId,
      },
    });
  }

  async updateAddress(address: AddressModel) {
    return await this._prismaService.address.update({
      where: { id: address.id },
      data: {
        id: address.id,
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
      },
    });
  }

  async deleteAddress(id: string) {
    return await this._prismaService.address.delete({ where: { id } });
  }
}
