import { Injectable } from '@nestjs/common';
import { UsuarioGrupo } from '@prisma/client';
import { PrismaProvider } from 'src/Infra/Provider/prisma';

@Injectable()
export class UsuarioGrupoService {

  constructor(
    private readonly prisma : PrismaProvider
  ) { }

  getOneBy(find : any) {
    return this.prisma.usuarioGrupo.findUnique({
      where : find
    });
  }

  getManyBy(userId: string) {

    if(userId != "")
      return this.prisma.usuarioGrupo.findMany({
        where : { "ParticipanteID" : userId}
      });
    else
      return this.prisma.usuarioGrupo.findMany();
  }

  create(user : UsuarioGrupo){
    return this.prisma.usuarioGrupo.create({
      data: user
    });
  }

  update(id : string ,user : UsuarioGrupo ){
    return this.prisma.usuarioGrupo.update({
      where : {id : id},
      data : user
    })
  }

  delete (id:string){
    return this.prisma.usuarioGrupo.delete({
      where : { id : id }
    })
  }
}
