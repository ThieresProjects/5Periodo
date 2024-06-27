import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Grupo } from '@prisma/client';
import { GrupoService } from 'src/Application/Services/grupo.service';

@Controller('grupo/')
export class GrupoController {
  constructor(
    private readonly grupoService : GrupoService
  ) {

  }

  @Get(':id')
  async getGroupsId(@Param('id') id: string) : Promise<Grupo> {
    return await this.grupoService.getOneBy({id:id});
  }
  

  @Get()
  async getGroups() : Promise<Grupo[]> {
    return await this.grupoService.getManyBy();
  }

  @Post()
  async create(@Body() group : Grupo) : Promise<Grupo> {
    console.log(group + " prop");
    return await this.grupoService.create(group);
  }

  @Put(':id')
  async update(@Param('id') id: string,groups: Grupo) : Promise<Grupo> {
    return await this.grupoService.update(id,groups);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) : Promise<Grupo> {
    return await this.grupoService.delete(id);
  }
}
