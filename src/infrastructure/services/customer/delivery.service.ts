import { Injectable } from '@nestjs/common';
import { PrismaService } from 'infrastructure/database/prisma.service';

@Injectable()
export class DeliveryService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getDeliveryMethods() {
    return await this._prismaService.deliveryMethod.findMany();
  }
}
