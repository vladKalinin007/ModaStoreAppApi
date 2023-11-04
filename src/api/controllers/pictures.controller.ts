import { QueryBus } from '@nestjs/cqrs';
import { BaseController } from './base.controller';
import { Get, Param } from '@nestjs/common';
import { GetPicturesByTypeQuery } from 'application/use-cases/common/pictures/queries/get-pictures-by-type.query/query/get-pictures-by-type.query';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pictures endpoints')
export class PictureController extends BaseController {
  constructor(private readonly _queryBus: QueryBus) {
    super();
  }

  @Get('pictures/:type')
  async getPicturesByType(@Param('type') type: string) {
    return await this._queryBus.execute(new GetPicturesByTypeQuery(type));
  }
}
