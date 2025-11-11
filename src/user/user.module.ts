import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
  PassportModule,
  JwtModule.register({
  secret: process.env.JWT_SECRET || 'banana',
  signOptions: { expiresIn: '1d' },
  })
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, JwtStrategy],
  exports: [UserService]
})
export class UserModule {}
