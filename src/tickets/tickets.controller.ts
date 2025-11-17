import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TicketDTO } from 'src/dto/ticket.dto';
import { TicketsService } from './tickets.service';


    @ApiTags('tickets')
    @Controller('tickets')
    export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

    @Post()
    create(@Body() dto: TicketDTO) {
      return this.ticketsService.createTicket(dto);
    }

   @Get()
   @ApiOperation({ summary: 'Lista todos os tickets' })

   async findAll(){
    return this.ticketsService.findAll();
   }

}
