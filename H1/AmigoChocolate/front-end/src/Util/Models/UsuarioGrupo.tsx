import { Grupo } from "./Grupo"
import { Usuario } from "./Usuario"

export type UsuarioGrupo = {
    id? : string 
    Participante : string
    Grupo        : string
    AmigoSecreto : string
    Desejo       : string
    Ativo        : boolean
}