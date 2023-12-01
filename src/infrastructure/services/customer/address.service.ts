import { Injectable } from '@nestjs/common';
import { AddressModel } from 'domain/models/customer/address.model';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { CurrentUserService } from '../identity/current-user.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AddressService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _currentUser: CurrentUserService,
  ) {}

  async getUserAddress() {
    const id: string = await this._currentUser.get();
    const address = (await this._prismaService.address.findFirst({
      where: { appUserId: id },
    })) as AddressModel;

    if (!address) {
      throw new Error('Address not found');
    }

    return address;
  }

  async createAddress(address?: AddressModel) {
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

  async createNewAddress(userId: string) {
    return (await this._prismaService.address.create({
      data: {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        appUserId: userId,
      },
    })) as AddressModel;
  }

  async updateAddress(address: AddressModel) {
    const id: string = await this._currentUser.get();
    const addressToFind = await this._prismaService.address.findFirst({
      where: { appUserId: id },
    });

    if (!addressToFind) {
      throw new Error('Address not found');
    }

    return (await this._prismaService.address.update({
      where: { id: addressToFind.id },
      data: {
        firstName: address.firstName,
        lastName: address.lastName,
        street: address.street,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
      },
    })) as AddressModel;
  }

  async deleteAddress(id: string) {
    return await this._prismaService.address.delete({ where: { id } });
  }
}
