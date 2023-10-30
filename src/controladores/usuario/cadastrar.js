const knex = require("../../conexao");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const cadastrar = async (req, res) => {
    const {nome, email, senha} = req.body;

    try {
        
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuarioCadastrado = await knex("usuarios")
            .insert({nome, email, senha: senhaCriptografada})
            .returning(["nome", "email"]);

        return res.status(201).json(usuarioCadastrado);

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = cadastrar