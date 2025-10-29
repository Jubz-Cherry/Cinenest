import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterDTO } from 'src/dto/user';

@ApiTags('user')
@Controller('user')
export class UserController {
  private users: any[] = []; // usa any pq agora vai ter movie também

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.users;
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  create(@Body() registerDTO: RegisterDTO) {
    // adiciona o campo movie antes de salvar
    const userWithMovie = { ...registerDTO, movie: 'cinemark' };
    this.users.push(userWithMovie);

    return {
      message: 'Usuário criado com sucesso!',
      user: userWithMovie,
    };
  }
}
