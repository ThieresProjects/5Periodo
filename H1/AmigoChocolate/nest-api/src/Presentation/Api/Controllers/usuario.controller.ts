import { Controller, Get, Post } from '@nestjs/common';
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
    return this.usuarioService.getMany();
  }

  @Post('usuario')
  create(){

    var user = { } as Usuario;

    return this.usuarioService.create(user);
  }
}
