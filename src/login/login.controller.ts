import { Controller, Body, Post, Get, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginDTO } from 'src/dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  async findAll() {
    return this.loginService.findAll();
  }

  @Post('login')
  @ApiOperation({ summary: 'Realiza o login e gera um token' })
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso' })
  @ApiResponse({ status: 400, description: 'Email ou senha incorretos' })
  async login(@Body() loginDTO: LoginDTO) {
    try {
      const result = await this.loginService.findUser(loginDTO);
      return result;
    } catch (error) {
      if (error.message === 'Email ou senha incorretos') {
        throw new BadRequestException('Email ou senha incorretos');
      }
      throw error;
    }
  }
}
