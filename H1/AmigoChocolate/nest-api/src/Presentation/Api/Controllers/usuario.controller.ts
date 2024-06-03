import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { UsuarioService } from 'src/Application/Services/usuario.service';

@Controller()
export class UsuarioController {
  constructor(
    private readonly usuarioService : UsuarioService
  ) {

  }

  @Get('usuario')
  getUsers() {
    return this.usuarioService.getManyBy();
  }

  @Post('usuario')
  create(user : Usuario){
    return this.usuarioService.create(user);
  }

  @Put('usuario')
  update(id: string,user: Usuario){
    return this.usuarioService.update(id,user);
  }

  @Delete('usuario')
  delete(id: string){
    return this.usuarioService.delete(id);
  }
}
