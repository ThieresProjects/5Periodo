import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioGrupo } from '@prisma/client';
import { UsuarioGrupoService } from 'src/Application/Services/usuarioGrupo.service';

@Controller('usuarioGrupo/')
export class UsuarioGrupoController {
  constructor(
    private readonly usuarioGrupoService : UsuarioGrupoService
  ) {

  }

  @Get(':userId')
  async getUserGroups(@Param('userId') userId : string) : Promise<UsuarioGrupo[]> {
    return await this.usuarioGrupoService.getManyBy(userId)
  }

  @Post()
  async create(@Body() userGroup : UsuarioGrupo) : Promise<UsuarioGrupo> {
    console.log(userGroup + " prop");
    return await this.usuarioGrupoService.create(userGroup);
  }

  @Put(':id')
  async update(@Param('id') id: string,userGroup: UsuarioGrupo) : Promise<UsuarioGrupo> {
    return await this.usuarioGrupoService.update(id,userGroup);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) : Promise<UsuarioGrupo> {
    return await this.usuarioGrupoService.delete(id);
  }
}
