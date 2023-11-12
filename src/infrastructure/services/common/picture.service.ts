import { Injectable } from '@nestjs/common';
import { PictureModel } from 'domain/models/common/picture.model';
import { PrismaService } from 'infrastructure/database/prisma.service';

@Injectable()
export class PictureService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getPictureByType(type: string): Promise<PictureModel[]> {
    return (await this._prismaService.picture.findMany({
      where: {
        pictureType: {
          contains: type,
          mode: 'insensitive',
        },
      },
    })) as unknown as PictureModel[];
  }
}
