import { ApiProperty } from '@nestjs/swagger';

export class TicketDTO {
  
  @ApiProperty({ example: "Demon Slayer: Castelo infinito", description: 'Nome do filme' })
  movieName: string;

  @ApiProperty({ example: "Cinemark Paulista"})
  cinema: string;

  @ApiProperty({ example: "YYYY-MM-DD", description: 'Data e hora do filme' })
  date: string | Date;

  @ApiProperty({ example: 2, description: 'Quantidade de ingressos' })
  quantity: number;
}
