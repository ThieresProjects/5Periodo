export interface GrupoProps {
    GrupoID : string;
    Nome : string;
    Descricao : string;
    Quatidade: number;
    Valor: number;
    DataCriacao: Date;
    DataFim : Date;
    Sorteado : boolean;
    Ativo : boolean;
}
 export class Grupo {
    private props : GrupoProps;

    constructor(props : GrupoProps){
        this.props = props;
    }

    public set GrupoID(id : string) {
        this.props.GrupoID = id;
    }

    public get GrupoID() : string {
        return this.props.GrupoID;
    }

    public set Nome(nome : string) {
        this.props.Nome = nome;
    }

    public get Nome() : string {
        return this.props.Nome;
    }

    public set Descricao(descricao : string) {
        this.props.Descricao = descricao;
    }

    public get Descricao() : string {
        return this.props.Descricao;
    }

    public set Valor(valor : number){
        this.props.Valor = valor;
    }

    public get Valor() : number{
        return this.props.Valor;
    }

    public set Quatidade(quatidade : number){
        this.props.Quatidade = quatidade;
    }

    public get Quatidade() : number{
        return this.props.Quatidade;
    }

    public set DataCriacao(data : Date){
        this.props.DataCriacao = data;
    }

    public get DataCriacao() : Date{
        return this.props.DataCriacao;
    }

    public set DataFim(data : Date){
        this.props.DataFim = data;
    }

    public get DataFim() : Date{
        return this.props.DataFim;
    }
    
    public set Sorteado(sorteado : boolean){
        this.props.Sorteado = sorteado;
    }

    public get Sorteado() : boolean{
        return this.props.Sorteado;
    }
    
    public set Ativo(ativo : boolean){
        this.props.Ativo = ativo;
    }

    public get Ativo() : boolean{
        return this.props.Ativo;
    }
 }