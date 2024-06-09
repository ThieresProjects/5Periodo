import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/Infra/Provider/prisma';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma : PrismaProvider
  ) { }

  async encode(pswd : string) : Promise<string> {
    const salt = 10;
    const hash = await bcrypt.hash(pswd, salt);

    return hash;
  }

  async compare(email: string, pswd : string) : Promise<boolean> {
    const hash = ( await this.prisma.usuario.findMany({
        where : { Email : email },
        select : { Senha : true }
    }) ) ;
    if( hash.length == 1 )
        return await bcrypt.compare(pswd, hash[0].Senha);
    
    return false;
  }

}
