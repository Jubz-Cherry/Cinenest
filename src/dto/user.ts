import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiProperty({ example: 'Gabriel Martins', description: 'Nome completo do usuário' })
  name: string;

  @ApiProperty({ example: 'gabriel@email.com', description: 'E-mail do usuário' })
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha do usuário' })
  password: string;

  @ApiProperty({ example: 'Vingadores', description: 'Filme' })
  film: string;
}
