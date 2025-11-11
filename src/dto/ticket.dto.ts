import { ApiProperty } from '@nestjs/swagger';

export class TicketDTO {
  
  @ApiProperty({ example: "cmhjdmzp90000y2ck0hr6n5ot" })
  userId: number;
  
  @ApiProperty({ example: "Renata Leal" })
  userName: string;

  @ApiProperty({ example: 8 })
  movieId: number;

  @ApiProperty({ example: "15/11/2025"})
  date: String;

  @ApiProperty({ example: 2 })
  quantity: number;
}
