const knex = require("../../conexao");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        
        const usuario = await knex("usuarios").select("*").where({email}).first();

        const token = await jwt.sign({id: usuario.id}, process.env.JWT_PASSWORD, {expiresIn: "1d"});

        return res.status(200).json({
            nome: usuario.nome,
            email: usuario.email,
            token
        });

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = login;