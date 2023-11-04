import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GetUserQuery } from 'application/use-cases/identity/user/queries/get-user.query/query/get-user.query';
import { DeleteUserCommand } from 'application/use-cases/identity/user/commands/delete-user.command/command/delete-user.command';
import { GetAddressQuery } from 'application/use-cases/identity/user/queries/get-address.query/query/get-address.query';
import { UpdateAddressCommand } from 'application/use-cases/identity/user/commands/update-address.command/command/update-address.command';
import { GetUserReviewsQuery } from 'application/use-cases/identity/user/queries/get-user-reviews.query/query/get-user-reviews.query';
import { AddReviewCommand } from 'application/use-cases/identity/user/commands/add-review.command/command/add-review.command';
import { CheckEmailExistsQuery } from 'application/use-cases/identity/user/queries/check-email-exists.query/query/check-email-exists.query';
import { UpdateUserCommand } from 'application/use-cases/identity/user/commands/update-user.command/command/update-user.command';
import { AddressDto, AppUserDto, ProductReviewDto } from 'api/dto';

@ApiTags('User endpoints')
export class UserController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Get('user')
  async getUser() {
    return await this._queryBus.execute(new GetUserQuery());
  }

  @Put('user')
  async updateUser(@Body() userDto: AppUserDto) {
    return await this._commandBus.execute(new UpdateUserCommand(userDto));
  }

  @Delete('user/:id')
  async deleteUser(@Param('id') id: string) {
    return await this._commandBus.execute(new DeleteUserCommand(id));
  }

  @Get('user/address')
  async getAddress() {
    return await this._queryBus.execute(new GetAddressQuery());
  }

  @Put('user/address')
  async updateAddress(@Body() addressDto: AddressDto) {
    return await this._commandBus.execute(new UpdateAddressCommand(addressDto));
  }

  @Get('user/reviews')
  async getUserReviews() {
    return await this._queryBus.execute(new GetUserReviewsQuery());
  }

  @Post('user/reviews')
  async addUserReview(@Body() reviewDto: ProductReviewDto) {
    return await this._commandBus.execute(new AddReviewCommand(reviewDto));
  }

  @Get('user/check-email-exists/:email')
  async checkEmailExists(@Param('email') email: string) {
    return await this._queryBus.execute(new CheckEmailExistsQuery(email));
  }
}
