const modelProdutos = require("../../api/Models/Usuario")

module.exports = {
    async List(req, res){
        try {
            const produtos = await modelProdutos.findAll();
            return res.json(produtos);
        } catch (erro) {
            return console.error(erro);
        }
    },

    async GetOne(req, res){
        try {
            const produto = await modelProdutos.findByPk(res.body.UsuarioID);               
            return res.json(produto);
        } catch (erro) {
            return console.error(erro);
        }
    },

    async Create(req, res){
        try {
            const produtos = await modelProdutos.create({
                UsuarioID: req.body.UsuarioID,
                Nome: req.body.Nome,
                Email: req.body.Email,
                Senha: req.body.Senha,
                Imagem: req.body.Imagem,
                Ativo: req.body.Ativo,
                CriadoEm: req.body.CriadoEm,
                AtualizadoEm: req.body.AtualizadoEm
            });
            return res.json(produtos);
        } catch (erro) {
            return console.error(erro);
        }
    },

    async Update(req, res){
        try {
            const produto = await modelProdutos.findByPk(res.body.UsuarioID);
            
            if(produto){
                produto.Nome = req.body.Nome;
                produto.Email = req.body.Email;
                produto.Senha = req.body.Senha;
                produto.Ativo = req.body.Ativo;
                produto.AtualizadoEm = new Date();
            }
            
            const newProduto = await modelProdutos.update(produto);
            
            return res.json(newProduto);
        } catch (erro) {
            return console.error(erro);
        }
    },
    async Delete(req, res){
        try {
            // const produto = await modelProdutos.findByPk(res.body.UsuarioID);            
            // const newProduto = await modelProdutos.Delete(produto);
            const produto = await modelProdutos.Delete(res.body.UsuarioID);            
            return res.json(produto);
        } catch (erro) {
            return console.error(erro);
        }
    }
}