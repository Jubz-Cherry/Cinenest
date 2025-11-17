import { Body, Controller, Get, Post, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RegisterDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';


@ApiTags('user')
@Controller('user/register')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  async findAll() {
    return this.userService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário e gera um token' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Email já existe' })
  async create(@Body() registerDTO: RegisterDTO) {
    try {
      const result = await this.userService.createUser(registerDTO);
      return result;
      // retorna o que vier do service (usuario + token)
      
    } catch (error) {
      if (error.message === 'Um usuário com este email já existe') {
        throw new BadRequestException('Este email já está em uso');
      }
      throw error;
    }
  } 
}
