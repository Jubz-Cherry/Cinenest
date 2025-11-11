import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, MoviesModule, TicketsModule, AuthModule],
})
export class AppModule {}
