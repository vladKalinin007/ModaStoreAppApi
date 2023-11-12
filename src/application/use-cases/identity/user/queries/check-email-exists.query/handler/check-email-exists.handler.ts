import { PrismaService } from 'infrastructure/database/prisma.service';
import { CheckEmailExistsQuery } from '../query/check-email-exists.query';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CheckEmailExistsQuery)
export class CheckEmailExistsHandler
  implements IQueryHandler<CheckEmailExistsQuery>
{
  constructor(private readonly _prismaService: PrismaService) {}

  async execute(query: CheckEmailExistsQuery): Promise<boolean> {
    const user = await this._prismaService.appUser.findFirst({
      where: {
        email: query.email,
      },
    });

    return !!user;
  }
}
