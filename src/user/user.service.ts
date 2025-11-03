import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/browser';
import { RegisterDTO } from 'src/dto/userDTO';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

    constructor( private prisma : PrismaService) {}
  
    async createUser(data: RegisterDTO) {
        // Verificar se já existe um usuário com este email
        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (existingUser) {
            throw new Error('Um usuário com este email já existe');
        }

        return this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
            },
        });
    }

    async findAll() {
    return this.prisma.user.findMany();
  }


}
