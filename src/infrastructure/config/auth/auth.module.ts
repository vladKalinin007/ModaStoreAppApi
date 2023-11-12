import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from 'infrastructure/serializers/session.serializer';
import { AuthService } from 'infrastructure/services/identity/auth.service';
import { JwtStrategy } from 'infrastructure/strategies/jwt.strategy';
import { LocalStrategy } from 'infrastructure/strategies/local.strategy';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    JwtService,
    JwtStrategy,
  ],
  exports: [
    JwtModule,
    PassportModule,
    AuthService,
    LocalStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}
