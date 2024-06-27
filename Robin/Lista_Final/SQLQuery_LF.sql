USE BD044987
GO

CREATE DATABASE Thieres
ON PRIMARY (
    NAME = MeuBancoDeDados_Data,
    FILENAME = 'D:\Thieres\Thieres_Data.mdf',
    SIZE = 10MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 10MB
)
LOG ON (
    NAME = MeuBancoDeDados_Log,
    FILENAME = 'D:\Thieres\Thieres_Log.ldf',
    SIZE = 10MB,
    MAXSIZE = 50MB,
    FILEGROWTH = 10MB
);
GO

USE BD044987;

CREATE SCHEMA Thieres_044987;

CREATE TABLE Thieres_044987.Pessoa (
    PessoaID INT PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    CPF VARCHAR(11) NOT NULL,
    CriadoEm DATE NOT NULL,
    AtualizadoEm DATE NULL
);

CREATE TABLE Thieres_044987.Empresa (
    EmpresaID INT PRIMARY KEY,
    Nome CHAR(100) NOT NULL,
    CriadoEm DATE NOT NULL,
    AtualizadoEm DATE NULL
);

CREATE TABLE Thieres_044987.Servico (
    ServicoID INT PRIMARY KEY,
    EmpresaID INT,
    PessoaID INT,
    Descricao VARCHAR(100) NOT NULL,
    DescricaoCompleta VARCHAR(MAX) NOT NULL,
    CriadoEm DATE NOT NULL,
    AtualizadoEm DATE NULL,
    FOREIGN KEY (PessoaID) REFERENCES Thieres_044987.Pessoa(PessoaID),
    FOREIGN KEY (EmpresaID) REFERENCES Thieres_044987.Empresa(EmpresaID),
);

CREATE TABLE Thieres_044987.TipoServico (
    TipoServicoID INT PRIMARY KEY,
    Descricao VARCHAR(100) NOT NULL,
    ValorExecutar MONEY NOT NULL,
    TempoMedioFazer INT NOT NULL,
    CriadoEm DATE NOT NULL,
    AtualizadoEm DATE NULL
);

CREATE TABLE Thieres_044987.ServicoTipoServico (
    ServicoID INT,
    TipoServicoID INT,
    ValorExecutar MONEY NOT NULL,
    DataInicio DATE NOT NULL,
    DataFim DATE NULL,
    Ativo INT NOT NULL,
    PRIMARY KEY (ServicoID, TipoServicoID),
    FOREIGN KEY (ServicoID) REFERENCES Thieres_044987.Servico(ServicoID),
    FOREIGN KEY (TipoServicoID) REFERENCES Thieres_044987.TipoServico(TipoServicoID),
);

INSERT INTO Thieres_044987.Pessoa
(
    PessoaID,
    Nome,
    CPF,
    CriadoEm
) VALUES 
(1,'User1','12345678912',GETDATE()),
(2,'User2','12345678913',GETDATE()),
(3,'User3','12345678912',GETDATE())

INSERT INTO Thieres_044987.Empresa
(
    EmpresaID,
    Nome,
    CriadoEm
) VALUES 
(1,'Company1',GETDATE()),
(2,'Company2',GETDATE()),
(3,'Company3',GETDATE())

INSERT INTO Thieres_044987.Servico
(
    ServicoID,
    EmpresaID,
    PessoaID,
    Descricao,
    DescricaoCompleta,
    CriadoEm
) VALUES 
(1,1,1,'service1','desc of service',GETDATE()),
(2,2,2,'service2','desc of service',GETDATE()),
(3,3,3,'service3','desc of service',GETDATE())

INSERT INTO Thieres_044987.TipoServico
(
    TipoServicoID,
    Descricao,
    ValorExecutar,
    TempoMedioFazer,
    CriadoEm
) VALUES 
(1,'typeService1',200.00,8,GETDATE()),
(2,'typeService2',200.00,8,GETDATE()),
(3,'typeService3',200.00,8,GETDATE())

INSERT INTO Thieres_044987.ServicoTipoServico
(
    ServicoID,
    TipoServicoID,
    ValorExecutar,
    Ativo,
    DataInicio
) VALUES 
(1,1,200.00,1,GETDATE()),
(2,2,200.00,1,GETDATE()),
(3,3,200.00,1,GETDATE())

SELECT 
    p.PessoaID,
    p.Nome AS NomePessoa,
    s.ServicoID,
    s.Descricao AS DescricaoServico,
    e.Nome AS NomeEmpresa,
    ts.Descricao AS TipoServicoDescricao,
    sts.ValorExecutar,
    sts.DataInicio,
    sts.DataFim,
    sts.Ativo
FROM 
    Thieres_044987.Pessoa p
JOIN 
    Thieres_044987.Servico s ON p.PessoaID = s.PessoaID
JOIN 
    Thieres_044987.Empresa e ON s.EmpresaID = e.EmpresaID
JOIN 
    Thieres_044987.ServicoTipoServico sts ON s.ServicoID = sts.ServicoID
JOIN 
    Thieres_044987.TipoServico ts ON sts.TipoServicoID = ts.TipoServicoID
GROUP BY 
    p.PessoaID,
    p.Nome,
    s.ServicoID,
    s.Descricao,
    e.Nome,
    ts.Descricao,
    sts.ValorExecutar,
    sts.DataInicio,
    sts.DataFim,
    sts.Ativo
ORDER BY 
    p.PessoaID;

-- Criar login para usuário de leitura
CREATE LOGIN ReadOnlyUser WITH PASSWORD = 'StrongPassword123!';
-- Criar usuário de banco de dados para leitura
CREATE USER ReadOnlyUser FOR LOGIN ReadOnlyUser;
-- Conceder permissões de leitura ao ReadOnlyUser
ALTER ROLE db_datareader ADD MEMBER ReadOnlyUser;

-- Criar login para usuário de leitura e escrita
CREATE LOGIN ReadWriteUser WITH PASSWORD = 'AnotherStrongPassword123!';
-- Criar usuário de banco de dados para leitura e escrita
CREATE USER ReadWriteUser FOR LOGIN ReadWriteUser;
-- Conceder permissões de leitura e escrita ao ReadWriteUser
ALTER ROLE db_datareader ADD MEMBER ReadWriteUser;
ALTER ROLE db_datawriter ADD MEMBER ReadWriteUser;
-- Remover a permissão de deletar objetos do ReadWriteUser
DENY ALTER, CONTROL, DELETE, DROP, REFERENCES ON SCHEMA::dbo TO ReadWriteUser;
