import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../query/get-user.query';
import { UserService } from 'infrastructure/services/identity/user.service';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly _userService: UserService) {}

  async execute() {
    const currentUser = await this._userService.getCurrentUser();
    return currentUser;
  }
}
