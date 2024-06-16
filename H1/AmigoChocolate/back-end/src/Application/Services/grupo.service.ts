import { Injectable } from '@nestjs/common';
import { Grupo } from '@prisma/client';
import { PrismaProvider } from 'src/Infra/Provider/prisma';

@Injectable()
export class GrupoService {

  constructor(
    private readonly prisma : PrismaProvider
  ) { }

  getOneBy(find : any) {
    return this.prisma.grupo.findUnique({
      where : find
    });
  }

  getManyBy(find : any = null) {

    if(find != null)
      return this.prisma.grupo.findMany({
        where : find
      });
    else
      return this.prisma.grupo.findMany();
  }

  create(user : Grupo){
    return this.prisma.grupo.create({
      data: user
    });
  }

  update(id : string ,user : Grupo ){
    return this.prisma.grupo.update({
      where : {id : id},
      data : user
    })
  }

  delete (id:string){
    return this.prisma.grupo.delete({
      where : { id : id }
    })
  }

}
