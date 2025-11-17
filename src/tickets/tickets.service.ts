import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketDTO } from 'src/dto/ticket.dto';

@Injectable()
export class TicketsService {
    constructor ( private readonly prisma: PrismaService) {}

    // Ajuste: aceita userId separado e o DTO vindo do controller
    async createTicket(data: TicketDTO) {
        return this.prisma.ticket.create({
            data: {
                // Temporariamente armazenamos o movieId como string no campo movieName
                // (o schema atual do Prisma usa movieName). Ajuste futuro: adicionar movieId ao schema
                movieName: String(data.movieName),
                cinema: data.cinema,
                date: new Date(String(data.date)),
                quantity: Number(data.quantity),
            },
        });
    }

    async findAll() {
        return this.prisma.ticket.findMany();
    }

}

