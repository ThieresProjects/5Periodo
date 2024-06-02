# Database build

![Screenshot](AmigoChocolate.drawio.png)


Se quiser visualizar o codigo em [SQL](AmigoChocolate.sql)
[Projeto](https://app.diagrams.net/#HThieresProjects%2F5Periodo%2Fmain%2FH1%2FAmigoChocolate%2FDatabase%2FAmigoChocolate.drawio#%7B"pageId"%3A"c5-AE6NmAJPWwx7wWNze"%7D)
```
CREATE SCHEMA hUm
GO
CREATE TABLE hUm.Usuario(
    UsuarioID INT PRIMARY KEY NOT NULL,
    Email VARCHAR(255),
    Senha VARCHAR(MAX),
    Nome VARCHAR(255),
    Imagem VARCHAR(MAX),
    CriadoEm DATETIME,
    AtualizadoEm DATETIME,
    Ativo BIT
)
CREATE TABLE hUm.Grupo(
  GrupoID int PRIMARY KEY NOT NULL,
  Nome varchar(150),
  Descricao varchar(250),
  Quantidade int,
  Valor float,
  Sorteado char,
  Criador varchar(150),
  DataFim datetime
)
CREATE TABLE hUm.GrupoUsuario(
  GrupoID int NOT NULL,
  UsuarioID int NOT NULL,
  AmigoSecreto varchar(150),
  Desejo varchar(150),
  Apelido varchar(150),
  CONSTRAINT FK_Grupo FOREIGN KEY (GrupoID) REFERENCES H1.Grupo(GrupoID),
  CONSTRAINT FK_Usuario FOREIGN KEY (UsuarioID) REFERENCES H1.Usuario(UsuarioID),
  CONSTRAINT PK_GrupoUsuario PRIMARY KEY(GrupoID,UsuarioID)
)
```
