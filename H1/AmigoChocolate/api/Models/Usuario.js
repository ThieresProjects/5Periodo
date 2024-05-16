const sequelize = require('sequelize');
const database = require('../Data/db');
const schema = "hUm";

class Usuario extends sequelize.Model {
    // UsuarioID    : number
    // Email        : string
    // Senha        : string
    // Nome         : string
    // Imagem       : string
    // CriadoEm     : Date
    // AtualizadoEm : Date
    // Ativo        : boolean
}

Usuario.init({
    UsuarioID : {
        type : sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 
    },
    Email : {
        type : sequelize.STRING,
        allowNull: false
    },
    Nome: {
        type : sequelize.STRING,
        allowNull: false
    },
    Senha: {
        type : sequelize.STRING,
        allowNull: false
    },
    Imagem: {
        type : sequelize.STRING,
        allowNull: false
    },
    CriadoEm: {
        type : sequelize.DATE,
        allowNull: false
    },
    AtualizadoEm: {
        type : sequelize.DATE,
        allowNull: false
    },
    Ativo: {
        type : sequelize.BOOLEAN,
        allowNull: false
    },

},
{
    sequelize : database,
    modelName : "Usuario",
    schema
});

module.exports = Usuario