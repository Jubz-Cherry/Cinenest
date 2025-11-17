import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/dto/login.dto';

@Injectable()
export class LoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // 🔹 Buscar todos (só pra testar mesmo)
  async findAll() {
    return this.prisma.user.findMany();
  }

  // 🔹 Login principal
  async findUser(data: LoginDTO) {
    // Busca o usuário pelo e-mail
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    // Verifica a senha (aqui tá simples, mas o ideal é usar bcrypt)
    if (user.password !== data.password) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    // Cria o payload e o token JWT
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    // Retorna o usuário e o token
    return {
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      access_token: token,
    };
  }
}
