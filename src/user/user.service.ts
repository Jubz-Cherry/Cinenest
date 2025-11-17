import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/dto/login.dto';
import { RegisterDTO } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  loginUser(data: LoginDTO) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async createUser(data: RegisterDTO) {
    // Verifica se já existe um usuário com este email
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('Um usuário com este email já existe');
    }

    // Cria o usuário
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    // Gera o token JWT com base no ID e email do usuário
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    // remove a senha do objeto user antes de retornar
    const { password, ...safeUser } = user;
    // Retorna mensagem, usuário e token
    return {
      message: 'Usuário criado com sucesso',
      user: safeUser,
      access_token: token,
    };
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });
  }
}
