CREATE SCHEMA H1;
  
CREATE TABLE H1.Usuario;
CREATE TABLE H1.Grupo;
CREATE TABLE H1.GrupoUsuario;

INSERT INTO H1.Usuario(
  UsuarioID int PRIMARY KEY NOT NULL,
  Nome varchar(150),
  Foto varchar(150)
);

INSERT INTO H1.Usuario(
  UsuarioID int PRIMARY KEY NOT NULL,
  Nome varchar(150),
);
INSERT INTO H1.Grupo(
  GrupoID int PRIMARY KEY NOT NULL,
  Nome varchar(150),
  Descricao varchar(250),
  Quantidade int,
  Valor float,
  Sorteado char,
  Criador varchar(150),
  DataFim datetime
);
INSERT INTO H1.GrupoUsuario(
  GrupoID int NOT NULL,
  UsuarioID int NOT NULL,
  AmigoSecreto varchar(150),
  Desejo varchar(150),
  Apelido varchar(150),
  CONSTRAINT FK_Grupo FOREIGN KEY (GrupoID) REFERENCES Grupo(GrupoID),
  CONSTRAINT FK_Usuario FOREIGN KEY (UsuarioID) REFERENCES Usuario(UsuarioID),
  CONSTRAINT PK_GrupoUsuario PRIMARY KEY(GrupoID,UsuarioID)
);
