import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DeliveryService } from 'infrastructure/services/customer/delivery.service';
import { GetDeliveryMethodsQuery } from '../query/get-delivery-methods.query';
import { DeliveryMethodDto } from 'api/dto';

@QueryHandler(GetDeliveryMethodsQuery)
export class GetDeliveryMethodsHandler implements IQueryHandler {
  constructor(private readonly _deliveryMethodService: DeliveryService) {}

  async execute() {
    const deliveryMethods =
      await this._deliveryMethodService.getDeliveryMethods();
    return deliveryMethods.map((deliveryMethod) =>
      DeliveryMethodDto.fromModel(deliveryMethod),
    );
  }
}
