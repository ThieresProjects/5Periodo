import { Module } from '@nestjs/common';
import { PrismaProvider } from './Provider/prisma';
import { UsuarioService } from 'src/Application/Services/usuario.service';
import { UsuarioController } from 'src/Presentation/Api/Controllers/usuario.controller';
import { GrupoService } from 'src/Application/Services/grupo.service';
import { GrupoController } from 'src/Presentation/Api/Controllers/grupo.controller';

@Module({
  imports: [],
  controllers: [
    UsuarioController,
    GrupoController
    // UsuarioController
  ],
  providers: [
    {
      provide : PrismaProvider,
      useClass : UsuarioService
    },
    {
      provide : PrismaProvider,
      useClass : GrupoService
    },
    // {
    //   provide : PrismaProvider,
    //   useClass : UsuarioGrupoService
    // },
  ],
})
export class AppModule {}
