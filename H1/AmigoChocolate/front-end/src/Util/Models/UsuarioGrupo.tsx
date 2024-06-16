import { Grupo } from "./Grupo"
import { Usuario } from "./Usuario"

export type UsuarioGrupo = {
    Participante : Usuario
    Grupo        : Grupo
    AmigoSecreto : string
    Desejo       : string
    Ativo        : boolean
}