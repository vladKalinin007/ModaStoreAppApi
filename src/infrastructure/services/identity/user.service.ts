import { Injectable } from '@nestjs/common';
import { AppUserModel } from 'domain/models/identity/app-user.model';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class UserService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _currentUser: CurrentUserService,
  ) {}

  private getUserId() {
    return this._currentUser.get();
  }

  async getCurrentUser() {
    const id = await this.getUserId();
    return (await this._prismaService.appUser.findUnique({
      where: { id },
    })) as AppUserModel;
  }

  async getUserByEmail(email: string) {
    return (await this._prismaService.appUser.findFirst({
      where: { email },
    })) as AppUserModel;
  }

  async getAllUsers() {
    return (await this._prismaService.appUser.findMany()) as AppUserModel[];
  }

  async createUser(user: AppUserModel) {
    return (await this._prismaService.appUser.create({
      data: {
        id: user.id,
        displayName: user.displayName,
        userName: user.userName,
        email: user.email,
        emailConfirmed: user.emailConfirmed,
        normalizedEmail: user.normalizedEmail,
        passwordHash: user.passwordHash,
        securityStamp: user.securityStamp,
        phoneNumber: user.phoneNumber,
        phoneNumberConfirmed: user.phoneNumberConfirmed,
        twoFactorEnabled: user.twoFactorEnabled,
        lockoutEnd: user.lockoutEnd,
        lockoutEnabled: user.lockoutEnabled,
        accessFailedCount: user.accessFailedCount,
        concurrencyStamp: user.concurrencyStamp,
      },
    })) as AppUserModel;
  }

  async updateUser(user: AppUserModel) {
    const id = await this.getUserId();
    return (await this._prismaService.appUser.update({
      where: { id: id },
      data: {
        displayName: user.displayName,
        userName: user.userName,
        email: user.email,
        emailConfirmed: user.emailConfirmed,
        normalizedEmail: user.normalizedEmail,
        passwordHash: user.passwordHash,
        securityStamp: user.securityStamp,
        phoneNumber: user.phoneNumber,
        phoneNumberConfirmed: user.phoneNumberConfirmed,
        twoFactorEnabled: user.twoFactorEnabled,
        lockoutEnd: user.lockoutEnd,
        lockoutEnabled: user.lockoutEnabled,
        accessFailedCount: user.accessFailedCount,
        concurrencyStamp: user.concurrencyStamp,
      },
    })) as AppUserModel;
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this._prismaService.appUser.delete({ where: { id } });
    return user ? true : false;
  }
}
