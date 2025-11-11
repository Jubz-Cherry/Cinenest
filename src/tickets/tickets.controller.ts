import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('tickets')
export class TicketsController {
    constructor ( private readonly prisma: PrismaService ) {}

}
