import { QueryBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { Get, Param } from '@nestjs/common';
import { GetPicturesByTypeQuery } from 'application/use-cases/common/pictures/queries/query/get-picture-by-type.query';

export class PicturesController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('pictures/:type')
  async getPicturesByType(@Param('type') type: string) {
    return await this._queryBus.execute(new GetPicturesByTypeQuery(type));
  }
}
