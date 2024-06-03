import { Controller, Get, Post } from '@nestjs/common';
import { Grupo } from '@prisma/client';
import { GrupoService } from 'src/Application/Services/grupo.service';

@Controller()
export class GrupoController {
  constructor(
    private readonly usuarioService : Grupo
  ) {

  }
}
