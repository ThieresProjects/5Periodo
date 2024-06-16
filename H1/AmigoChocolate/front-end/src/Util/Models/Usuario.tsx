import { ImagemPerfil } from "./ImagemPerfil";

export type Usuario = {
    Nome : string;
    Email: string;
    Senha: string;
    Imagem: ImagemPerfil;
    Ativo: boolean;
}