import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/Infra/Provider/prisma';

@Injectable()
export class GrupoService {

  constructor(
    private readonly prisma : PrismaProvider
  ) {
  
  }


}
