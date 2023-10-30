const jwt = require("jsonwebtoken");
const knex = require("../../conexao");

const autenticaUsuario = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(400).json({mensagem: `Usuário não autenticado`});
    }

    const token = authorization.split(" ")[1]

    try {

        const {id} = await jwt.verify(token, process.env.JWT_PASSWORD);

        const usuarioEncontrado = await knex("usuarios").where({id}).first();

        req.usuario = usuarioEncontrado;

        next();

    } catch (error) {
        return res.status(400).json({mensagem: `O token informado não é válido para essa sessão.`});
    }
}

module.exports = autenticaUsuario;