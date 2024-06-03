import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaProvider } from 'src/Infra/Provider/prisma';

@Injectable()
export class UsuarioService {

  constructor(
    private readonly prisma : PrismaProvider
  ) { }

  getMany() {
    return this.prisma.usuario.findMany();
  }

  create(user : Usuario){
    return this.prisma.usuario.create({
      data: user
    });
  }
}
