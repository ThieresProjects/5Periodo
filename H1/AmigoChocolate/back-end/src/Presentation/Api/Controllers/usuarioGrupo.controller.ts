import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsuarioGrupo } from '@prisma/client';
import { UsuarioGrupoService } from 'src/Application/Services/usuarioGrupo.service';

@Controller()
export class UsuarioGrupoController {
  constructor(
    private readonly usuarioService : UsuarioGrupoService
  ) {

  }

  @Get('usuario')
  getUsers() {
    return this.usuarioService.getManyBy();
  }

  @Post('usuario')
  create(userGroup : UsuarioGrupo){
    return this.usuarioService.create(userGroup);
  }

  @Put('usuario')
  update(id: string,userGroup: UsuarioGrupo){
    return this.usuarioService.update(id,userGroup);
  }

  @Delete('usuario')
  delete(id: string){
    return this.usuarioService.delete(id);
  }
}
