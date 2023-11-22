import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../query/get-user.query';
import { UserService } from 'infrastructure/services/identity/user.service';
import { AppUserDto } from 'api/dto';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly _userService: UserService) {}

  async execute(): Promise<AppUserDto> {
    const currentUser = await this._userService.getCurrentUser();
    return AppUserDto.toDto(currentUser);
  }
}
