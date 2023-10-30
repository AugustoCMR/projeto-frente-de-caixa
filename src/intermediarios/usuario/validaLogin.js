const knex = require("../../conexao")
const bcrypt = require("bcrypt");

const validaLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    try {
        
        const buscaUsuario = await knex("usuarios").where({email}).first();
      
        if(!buscaUsuario) {
            return res.status(400).json({mensagem: "Email ou senha inválidos"});
        }

        const verificaSenhaCriptografada = await bcrypt.compare(senha, buscaUsuario.senha);

        if(!verificaSenhaCriptografada) {
            return res.status(400).json({mensagem: "Email ou senha inválidos"});
        }

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }

}

module.exports = validaLogin;