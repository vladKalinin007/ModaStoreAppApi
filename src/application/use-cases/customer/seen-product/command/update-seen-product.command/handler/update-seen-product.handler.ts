import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateSeenProductCommand } from '../command/update-seen-product.command';
import { SeenProductService } from 'infrastructure/services/customer/seen-product.service';
import { SeenProductListDto } from 'api/dto/customer/seen-product-list.dto';

@CommandHandler(UpdateSeenProductCommand)
export class UpdateSeenProductHandler
  implements ICommandHandler<UpdateSeenProductCommand>
{
  constructor(private readonly _seenProductService: SeenProductService) {}

  async execute(command: UpdateSeenProductCommand) {
    const seenProductList = SeenProductListDto.toModel(
      command.seenProductListDto,
    );
    const updatedSeenProductList =
      await this._seenProductService.updateSeenProducts(
        seenProductList.id,
        seenProductList,
      );

    return SeenProductListDto.fromModel(updatedSeenProductList);
  }
}
