import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../../../Application/Services/app.service';
import { PrismaService } from '../../../Infra/Data/Provider/prisma';
import { Usuario } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly prisma : PrismaService
  ) {

  }

  @Get('usuario')
  getUsers() {
    return this.prisma.usuario.findMany();
  }

  @Post('usuario')
  async create(){

    var user = {
      Nome: 'admin',
      Email: 'admin@admin',
      Senha: 'admin',
      Imagem: '',
      Ativo: true,
      AtualizadoEm: new Date()
    } as Usuario;

    return await this.prisma.usuario.create({
      data: user
    });
  }
}
