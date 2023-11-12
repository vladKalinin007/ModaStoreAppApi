import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'infrastructure/database/prisma.service';
import { SessionSerializer } from 'infrastructure/serializers/session.serializer';
import { AuthService } from 'infrastructure/services/identity/auth.service';
import { CurrentUserService } from 'infrastructure/services/identity/current-user.service';
import { SessionStore } from 'infrastructure/services/identity/session.store';
import { LocalStrategy } from 'infrastructure/strategies/local.strategy';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    PrismaService,
    JwtService,
    CurrentUserService,
    SessionStore,
  ],
  exports: [
    PassportModule,
    AuthService,
    LocalStrategy,
    SessionSerializer,
    SessionStore,
  ],
})
export class AuthModule {}
