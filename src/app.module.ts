import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/use.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
