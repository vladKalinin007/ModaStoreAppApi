import { ApiTags } from '@nestjs/swagger';
import { BaseController } from './base.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { GetUserQuery } from 'application/use-cases/identity/user/queries/get-user.query/query/get-user.query';
import { DeleteUserCommand } from 'application/use-cases/identity/user/commands/delete-user.command/command/delete-user.command';
import { GetAddressQuery } from 'application/use-cases/identity/user/queries/get-address.query/query/get-address.query';
import { UpdateAddressCommand } from 'application/use-cases/identity/user/commands/update-address.command/command/update-address.command';
import { CheckEmailExistsQuery } from 'application/use-cases/identity/user/queries/check-email-exists.query/query/check-email-exists.query';
import { UpdateUserCommand } from 'application/use-cases/identity/user/commands/update-user.command/command/update-user.command';
import { AddressDto, AppUserDto } from 'api/dto';
import { AuthenticatedGuard } from 'api/guards/authenticated.guard';
import { RegisterCommand } from 'application/use-cases/identity/authentication/commands/register.command/command/register.command';
import {
  RegisterDto,
  RegisterResponseDto,
} from 'api/dto/identity/register.dto';

@ApiTags('User endpoints')
export class UserController extends BaseController {
  constructor(
    private readonly _queryBus: QueryBus,
    private readonly _commandBus: CommandBus,
  ) {
    super();
  }

  @Post('user')
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<RegisterResponseDto> {
    return await this._commandBus.execute(new RegisterCommand(registerDto));
  }

  @Get('user')
  @UseGuards(AuthenticatedGuard)
  async get() {
    return await this._queryBus.execute(new GetUserQuery());
  }

  @UseGuards(AuthenticatedGuard)
  @Put('user')
  async update(@Body() userDto: AppUserDto) {
    return await this._commandBus.execute(new UpdateUserCommand(userDto));
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('user/:id')
  async delete(@Param('id') id: string) {
    return await this._commandBus.execute(new DeleteUserCommand(id));
  }

  @UseGuards(AuthenticatedGuard)
  @Get('user/address')
  async getAddress() {
    return await this._queryBus.execute(new GetAddressQuery());
  }

  @UseGuards(AuthenticatedGuard)
  @Put('user/address')
  async updateAddress(@Body() addressDto: AddressDto) {
    return await this._commandBus.execute(new UpdateAddressCommand(addressDto));
  }

  @Get('user/check-email-exists/:email')
  async checkEmailExists(@Param('email') email: string): Promise<boolean> {
    return await this._queryBus.execute(new CheckEmailExistsQuery(email));
  }
}
