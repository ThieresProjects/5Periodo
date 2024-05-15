# Lista 4

Exc 18
```
CREATE TABLE #eightteen( Valor money, Data DATE)
INSERT INTO #eightteen( Valor , Data ) VALUES 
    (525.50,'01/01/2017'),
    (500.00,'01/02/2017'),
    (525.00,'01/03/2017'),
    (525.00,'01/04/2017'),
    ( 60.10,'01/05/2017'),
    (888.80,'01/06/2017'),
    (525.00,'01/07/2017'),
    (808.00,'01/08/2017'),
    (505.00,'01/09/2017'),
    (506.00,'01/10/2017'),
    (666.60,'01/11/2017'),
    (600.55,'01/12/2017'),

    (525.50,'01/01/2018'),
    (550.00,'01/02/2018'),
    (527.55,'01/03/2018'),
    (521.02,'01/04/2018'),
    ( 60.50,'01/05/2018'),
    (888.80,'01/06/2018'),
    (521.02,'01/07/2018'),
    (808.50,'01/08/2018'),
    (505.05,'01/09/2018'),
    (505.55,'01/10/2018'),
    (750.00,'01/11/2018'),
    (505.60,'01/12/2018')
SELECT * FROM #eightteen

SELECT 
    ANO, [01] AS JAN,[02] AS FEV,[03] AS MAR,[04] AS ABR,[05] AS MAI,[06] AS JUN,[07] AS JUL,[08] AS AGO,[09] AS SEP,[10] AS OCT,[11] AS NOV,[12] AS DEZ
FROM (
    SELECT 
        FORMAT(Data, 'yyyy') AS ANO,
        FORMAT(Data, 'dd') AS MES,
        Valor
    FROM #eightteen
) as eightteen
PIVOT ( SUM(Valor) FOR MES IN ([01],[02],[03],[04],[05],[06],[07],[08],[09],[10],[11],[12]) ) as p

WITH eightteenTwo AS (
    SELECT
        -- '' AS DIFFERENCE,
        FORMAT(Data, 'dd') AS MES,
        ( SUM(CASE WHEN ( FORMAT(Data, 'yyyy') = '2018') THEN Valor ELSE 0 END) - SUM(CASE WHEN ( FORMAT(Data, 'yyyy') = '2017') THEN Valor ELSE 0 END) ) / SUM(CASE WHEN ( FORMAT(Data, 'yyyy') = '2017') THEN Valor ELSE 0 END)  AS ValTwo
    FROM #eightteen
    GROUP BY FORMAT(Data, 'dd')
)

SELECT 
    [01] AS JAN,[02] AS FEV,[03] AS MAR,[04] AS ABR,[05] AS MAI,[06] AS JUN,[07] AS JUL,[08] AS AGO,[09] AS SEP,[10] AS OCT,[11] AS NOV,[12] AS DEZ
FROM eightteenTwo
PIVOT ( SUM(ValTwo) FOR MES IN ([01],[02],[03],[04],[05],[06],[07],[08],[09],[10],[11],[12]) ) as p

DROP TABLE #eightteen
```
EXC 19
```
CREATE TABLE #nineteen (
    Nome NVARCHAR(100),
    DataVenda NVARCHAR(100),
    Valor money
);
INSERT INTO #nineteen (Nome,DataVenda,Valor)  
(
    SELECT
        c.Nome,
        FORMAT(v.DataPedido, 'dd/MM/yyyy') AS DataVenda,
        v.ValorBruto AS Valor
    FROM Venda as v
        INNER JOIN Cliente as c
        ON v.ClienteID  = c.ClienteID
)
GO
WITH VendasNumeradas AS (
    SELECT
        *
        , ROW_NUMBER() OVER (PARTITION BY Nome ORDER BY DataVenda DESC) AS numero_de_linha
    FROM
        #nineteen
)
SELECT
    *
FROM
    VendasNumeradas
WHERE
    numero_de_linha <= 2;

DROP TABLE #nineteen
```
EXC 20
```
CREATE TABLE #twenty (
    Produto NVARCHAR(100),
    DataVenda NVARCHAR(100),
    QtdeVendida int
);
INSERT INTO #twenty (Produto,DataVenda,QtdeVendida)  
(
    SELECT 
        -- TOP(10)
        -- *
        p.Descricao AS Produto,
        FORMAT(v.DataPedido, 'dd/MM/yyyy') AS DataVenda,
        SUM(vp.QtdeVendida) AS QtdeVendida
    FROM Venda as v
        INNER JOIN VendaProduto as vp
        ON v.VendaID  = vp.VendaID
        INNER JOIN Produto as p
        ON p.ProdutoID = vp.ProdutoID
    GROUP BY p.Descricao, FORMAT(v.DataPedido, 'dd/MM/yyyy')
)
GO
WITH VendasNumeradas AS (
    SELECT
        *
        , ROW_NUMBER() OVER (PARTITION BY Produto ORDER BY DataVenda DESC) AS numero_de_linha
    FROM
        #twenty
)
SELECT
    *
FROM
    VendasNumeradas
WHERE
    numero_de_linha <= 2;

DROP TABLE #twenty
```
