import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('user') // nome da seção no Swagger
@Controller('user')
export class UserController {
  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  findAll() {
    return ['user1', 'user2'];
  }
}
