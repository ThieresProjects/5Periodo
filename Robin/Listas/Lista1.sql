USE BD044987
GO 

-- Ex1
SELECT 
	COUNT(*) as ProdutosVendidos,
	SUBSTRING(DATENAME(mm, Venda.DataPedido),1,3)
	+ '/' +	DATENAME(yyyy, Venda.DataPedido) as DataVenda
 FROM Venda INNER JOIN VendaProduto 
	ON Venda.VendaID = VendaProduto.VendaID
	INNER JOIN Produto 
	ON VendaProduto.ProdutoID = Produto.ProdutoID
 GROUP BY SUBSTRING(DATENAME(mm, Venda.DataPedido),1,3)
			+ '/' + DATENAME(yyyy, Venda.DataPedido) 

-- Ex2
SELECT
 SUBSTRING(Nome, 1, CHARINDEX(' ', Nome, 1) - 1) as PrimeiroNome,
 DATENAME(day, DataNascimento) + '/' +  SUBSTRING(DATENAME(mm, DataNascimento),1,3) as DataNascimento
 FROM Cliente INNER JOIN ClienteFisico 
	ON Cliente.ClienteID = ClienteFisico.ClienteID
 ORDER BY DataNascimento

-- Ex3
 
-- Ex4

SELECT 
	--*
	m.Descricao as Marcas,
	COUNT(*) as TotalVendas,
	COUNT(*) * 100 / ( SELECT COUNT(*) FROM VendaProduto ) as Porcentagem
 FROM Marca as m
	INNER JOIN Produto as p
	ON m.MarcaID = p.MarcaID
	INNER JOIN VendaProduto as vp
	ON p.ProdutoID = vp.ProdutoID
 GROUP BY m.Descricao

