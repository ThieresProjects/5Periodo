import { PrismaProvider } from '../Provider/prisma';
import { Grupo } from '@prisma/client';

export class GrupoRepository {

  constructor(
    private readonly prisma : PrismaProvider
  ) {

  }

  GetMany() {
    return this.prisma.usuario.findMany();
  }

  Create(group : Grupo){
    return this.prisma.grupo.create({
      data: group
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
