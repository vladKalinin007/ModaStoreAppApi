import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PictureService } from 'infrastructure/services/common/picture.service';
import { PictureDto } from 'api/dto';
import { GetPicturesByTypeQuery } from '../query/get-pictures-by-type.query';

@QueryHandler(GetPicturesByTypeQuery)
export class GetPicturesByTypeHandler
  implements IQueryHandler<GetPicturesByTypeQuery>
{
  constructor(private readonly _pictureService: PictureService) {}

  async execute(query: GetPicturesByTypeQuery): Promise<PictureDto[]> {
    const pictures = await this._pictureService.getPictureByType(query.type);
    return pictures.map((picture) => new PictureDto(picture));
  }
}
