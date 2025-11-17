import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, MoviesModule, TicketsModule, AuthModule, LoginModule],
})
export class AppModule {}
