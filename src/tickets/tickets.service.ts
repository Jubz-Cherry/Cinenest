import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

export interface CreateTicketDTO {
    userId: number;
    movieId: number;
    cinema: string;
    date: string | Date;
    quantity: number;
}

@Injectable()
export class TicketsService {
    constructor ( private readonly prisma: PrismaService) {}

    async create(data: CreateTicketDTO) {
        return this.prisma.tickets.create({
            data: {
                userId: data.userId,
                movieId: data.movieId,
                cinema: data.cinema,
                date: new Date (data.date),
                quantity: data.quantity,
            },
            include: {
                user: true,
                movie: true,
            },
        });
    }

    async findAll() {
        return this.prisma.tickets.findMany({
            include: {
                user: true,
                movie: true,
            },
        });
    }
}

