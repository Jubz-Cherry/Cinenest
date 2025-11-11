import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';


@Controller('movies')
export class MoviesController {
    constructor (private readonly prisma: PrismaService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos os filmes do catálogo' })
    @ApiResponse({ status: 200, description: 'Lista de filmes retornada com sucesso' })
  async findAll() {
    return this.prisma.movies.findMany();
  }

}
