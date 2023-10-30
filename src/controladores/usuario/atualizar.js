const knex = require("../../conexao");
const bcrypt = require("bcrypt");

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    const { id } = req.usuario

    try {
        
        const senhaCriptografada = bcrypt.hash(senha, 10);

        await knex("usuarios").update({nome, email, senha: senhaCriptografada}).where({id});

        return res.status(200).json({mensagem: "Informações atualizadas com sucesso!"});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor ${error.message}`});
    }
}

module.exports = atualizarUsuario;