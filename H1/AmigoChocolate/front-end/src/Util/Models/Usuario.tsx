import { ImagemPerfil } from "./ImagemPerfil";

export type Usuario = {
    id?: string;
    Nome : string;
    Email: string;
    Senha: string;
    Imagem: string;
    Ativo: boolean;
}