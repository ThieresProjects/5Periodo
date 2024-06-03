import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaProvider } from 'src/Infra/Provider/prisma';

@Injectable()
export class UsuarioService {

  constructor(
    private readonly prisma : PrismaProvider
  ) { }

  getOneBy(find : any) {
    return this.prisma.usuario.findUnique({
      where : find
    });
  }

  getManyBy(find : any = null) {

    if(find != null)
      return this.prisma.usuario.findMany({
        where : find
      });
    else
      return this.prisma.usuario.findMany();
  }

  create(user : Usuario){
    return this.prisma.usuario.create({
      data: user
    });
  }

  update(id : string ,user : Usuario ){
    return this.prisma.usuario.update({
      where : {id : id},
      data : user
    })
  }

  delete (id:string){
    return this.prisma.usuario.delete({
      where : { id : id }
    })
  }
}
