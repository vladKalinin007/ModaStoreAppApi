import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeenProductService } from 'infrastructure/services/customer/seen-product.service';
import { NotFoundException } from '@nestjs/common';
import { CreateSeenProductCommand } from '../command/create-seen-product.command';
import { SeenProductList } from 'domain/models/customer/seen-product-list.model';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

@CommandHandler(CreateSeenProductCommand)
export class CreateSeenProductHandler
  implements ICommandHandler<CreateSeenProductCommand>
{
  constructor(private readonly _seenProductService: SeenProductService) {}

  async execute(command: CreateSeenProductCommand) {
    const result = await this._seenProductService.createSeenProductList(
      SeenProductListDto.toModel(command.seenProductListDto),
    );

    if (!result) {
      throw new NotFoundException('Product not found');
    }

    return SeenProductList.from(result);
  }
}
