import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeenProductService } from 'infrastructure/services/customer/seen-product.service';
import { CreateSeenProductCommand } from '../command/create-seen-product.command';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

@CommandHandler(CreateSeenProductCommand)
export class CreateSeenProductHandler
  implements ICommandHandler<CreateSeenProductCommand>
{
  constructor(private readonly _seenProductService: SeenProductService) {}

  async execute(command: CreateSeenProductCommand) {
    const seenProdudctList = SeenProductListDto.toModel(
      command.seenProductListDto,
    );
    const createdSeenProductList =
      await this._seenProductService.createSeenProductList(seenProdudctList);
    return SeenProductListDto.fromModel(createdSeenProductList);
  }
}
