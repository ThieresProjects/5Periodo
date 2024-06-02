import { PrismaProvider } from '../Provider/prisma';
import { Usuario } from '@prisma/client';

export class UsuarioRepository {

  constructor(
    private readonly prisma : PrismaProvider
  ) {

  }

  GetMany() {
    return this.prisma.usuario.findMany();
  }

  Create(user : Usuario){
    return this.prisma.usuario.create({
      data: user
    });
  }

//   async Update(user : Usuario){
//     return await this.prisma.usuario.update({
//       data: user
//     });
//   }

//   async Delete(user : Usuario){
//     return await this.prisma.usuario.delete({
//       select: '',
//       where: ''
//     });
//   }
}
