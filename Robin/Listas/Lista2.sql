USE BD044987
GO

-- Exc 5
CREATE VIEW primeiraview
AS
    SELECT 
        c.Nome as NomeCliente,
        c.ClienteID as Codigo,
        ( 
            CASE WHEN cj.ClienteID = c.ClienteID 
            THEN cj.CNPJ
            ELSE cf.CPF
            END 
        ) as CpfCnpj
     FROM Cliente as c
        FULL JOIN ClienteFisico as cf 
        ON c.ClienteID = cf.ClienteID
        FULL JOIN ClienteJuridico as cj
        ON c.ClienteID = cj.ClienteID;
GO

CREATE VIEW segundaview
AS
    SELECT 
        c.Nome as NomeCliente,
        c.ClienteID as Codigo,
        cf.CPF as CpfCnpj
     FROM Cliente as c
        INNER JOIN ClienteFisico as cf
        ON c.ClienteID = cf.ClienteID
    UNION
    SELECT 
        c.Nome as NomeCliente,
        c.ClienteID as Codigo,
        cj.CNPJ as CpfCnpj
     FROM Cliente as c
        INNER JOIN ClienteJuridico as cj
        ON c.ClienteID = cj.ClienteID
GO

SELECT * FROM primeiraview
SELECT * FROM segundaview

DROP VIEW primeiraview
DROP VIEW segundaview

-- Exc 6
GO
CREATE VIEW terceiraview
AS
    SELECT 
        g.Descricao as Grupo,
        DATENAME(year, v.DataPedido) as Ano,
        SUM(vp.PrecoVenda) as VendasPorAno
     FROM Produto as p
        INNER JOIN VendaProduto as vp
        ON vp.ProdutoID = p.ProdutoID
        INNER JOIN Venda as v
        ON vp.VendaID = v.VendaID
        INNER JOIN Grupo as g
        ON g.GrupoID = p.GrupoID
     GROUP BY g.Descricao, DATENAME(year, v.DataPedido)
GO
SELECT * FROM terceiraview;
DROP VIEW terceiraview;

-- Exc 7

-- Exc 8
GO
CREATE PROCEDURE clienteFJ 
@clienteId INT = 0
AS 
    SELECT 
        c.Nome as NomeCliente,
        c.ClienteID as Codigo,
        ( 
            CASE WHEN cj.ClienteID = c.ClienteID 
            THEN cj.CNPJ
            ELSE cf.CPF
            END 
        ) as CpfCnpj
     FROM Cliente as c
        FULL JOIN ClienteFisico as cf 
        ON c.ClienteID = cf.ClienteID
        FULL JOIN ClienteJuridico as cj
        ON c.ClienteID = cj.ClienteID
     WHERE 1=1
        AND @clienteId = IIF(@clienteId = 0, @clienteId, c.ClienteID) 
GO
EXEC clienteFJ 4
DROP PROCEDURE clienteFJ

-- Exc 9

SELECT 
    g.Descricao as Grupo,
    SUM(
        IIF(p.ProdutoID IS NULL,0,1)
    ) as qntdProduto,
    -- COUNT(p.ProdutoID) as qntdProduto,
    SUM(        
        IIF(vp.VendaID IS NULL,0,1)
    ) as qntdVendida,
    -- COUNT(vp.VendaID) as qntdVendida,
    ( IIF(MAX(v.DataPedido) IS NULL, 'sem registro', CAST(MAX(v.DataPedido)AS VARCHAR) )) as ultimaVenda
 FROM Produto as p
    FULL JOIN VendaProduto as vp
    ON vp.ProdutoID = p.ProdutoID
    FULL JOIN Venda as v
    ON vp.VendaID = v.VendaID
    INNER JOIN Grupo as g
    ON g.GrupoID = p.GrupoID
 WHERE vp.VendaID IS NULL
 GROUP BY g.GrupoID,g.Descricao

 -- Exc 10
GO
CREATE PROCEDURE clientePesquisa
@clienteName CHAR
AS 
SELECT TOP(10) *
 FROM Cliente as c
 WHERE 1=1
    AND Nome LIKE @clienteName + '%'
    OR ClienteID = CASE WHEN ISNUMERIC(@clienteName) = 1 THEN  @clienteName END
GO
EXEC clientePesquisa 'C';
DROP PROCEDURE clientePesquisa;