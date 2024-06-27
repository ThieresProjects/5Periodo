import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Usuario } from '@prisma/client';
import { UsuarioService } from 'src/Application/Services/usuario.service';

@Controller('usuario/')
export class UsuarioController {
  constructor(
    private readonly usuarioService : UsuarioService
  ) {

  }
  @Get(':id')
  async getUserId(@Param('id') id: string) : Promise<Usuario> {
    console.log(id);
    return await this.usuarioService.getOneBy({id:id});
  }
  
  @Get()
  async getUsers() : Promise<Usuario[]> {
    return await this.usuarioService.getManyBy();
  }

  @Post()
  async create(@Body() user : Usuario) : Promise<Usuario> {
    console.log(user + " prop");
    return await this.usuarioService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: string,user: Usuario) : Promise<Usuario> {
    return await this.usuarioService.update(id,user);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) : Promise<Usuario> {
    return await this.usuarioService.delete(id);
  }

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file'))
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     console.log(file);
//   }
}
