export interface UsuarioProps {
    UsuarioID : string;
    Nome : string;
    Email : string;
    Senha : string;
    Imagem: string;
    Ativo : boolean;
}

export class Usuario {
    private props : UsuarioProps;

    constructor(props : UsuarioProps){
        this.props = props;
    }

    public set UsuarioID(id : string){
        this.props.Nome = id;
    }

    public get UsuarioID() : string{
        return this.props.UsuarioID;
    }

    public set Nome(nome : string){
        this.props.Nome = nome;
    }

    public get Nome() : string{
        return this.props.Nome;
    }

    public set Email(email : string){
        this.props.Email = email;
    }

    public get Email() : string{
        return this.props.Email;
    }

    public set Senha(senha : string){
        this.props.Senha = senha;
    }

    public get Senha() : string{
        return this.props.Senha;
    }

    public set Imagem(Imagem : string){
        this.props.Imagem = Imagem;
    }

    public get Imagem() : string{
        return this.props.Imagem;
    }

    public set Ativo(ativo : boolean){
        this.props.Ativo = ativo;
    }

    public get Ativo() : boolean{
        return this.props.Ativo;
    }
}