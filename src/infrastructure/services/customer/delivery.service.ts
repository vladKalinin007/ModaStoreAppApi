import { Injectable } from '@nestjs/common';
import { DeliveryMethodModel } from 'domain/models/customer/delivery-method.model';
import { PrismaService } from 'infrastructure/database/prisma.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getDeliveryMethods() {
    return (await this._prismaService.deliveryMethod.findMany()) as DeliveryMethodModel[];
  }

  async getDeliveryMethodById(id: string) {
    return (await this._prismaService.deliveryMethod.findUnique({
      where: {
        id,
      },
    })) as DeliveryMethodModel;
  }
}
