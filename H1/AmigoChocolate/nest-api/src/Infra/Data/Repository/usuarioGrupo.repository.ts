import { PrismaProvider } from '../Provider/prisma';
import { UsuarioGrupo } from '@prisma/client';

export class UsuarioGrupoRepository {

  constructor(
    private readonly prisma : PrismaProvider
  ) {

  }

  GetMany() {
    return this.prisma.usuarioGrupo.findMany();
  }

  Create(groupUser : UsuarioGrupo){
    return this.prisma.usuarioGrupo.create({
      data: groupUser
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
