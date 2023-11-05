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
    const result = await this._seenProductService.updateSeenProducts(
      SeenProductListDto.toModel(command.seenProductListDto),
    );

    return SeenProductListDto.from(result);
  }
}
