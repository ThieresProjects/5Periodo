export interface UsuarioGrupoProps {
    ParticipanteID: string;
    GrupoID : string;
    Apelido : string;
    AmigoSecreto : string;
    Dejeso : string;
    Ativo : boolean;
}

export class UsuarioGrupo {
    private props : UsuarioGrupoProps;

    constructor(props : UsuarioGrupoProps){
        this.props = props;
    }

    public set GrupoID(id : string) {
        this.props.GrupoID = id;
    }

    public get GrupoID() : string {
        return this.props.GrupoID;
    }

    public set ParticipanteID(id : string) {
        this.props.ParticipanteID = id;
    }

    public get ParticipanteID() : string {
        return this.props.ParticipanteID;
    }

    public set Apelido(apelido : string) {
        this.props.Apelido = apelido;
    }

    public get Apelido() : string {
        return this.props.Apelido;
    }

    public set Dejeso(dejeso : string) {
        this.props.Dejeso = dejeso;
    }

    public get Dejeso() : string {
        return this.props.Dejeso;
    }

    public set Ativo(ativo : boolean){
        this.props.Ativo = ativo;
    }

    public get Ativo() : boolean{
        return this.props.Ativo;
    }
 }