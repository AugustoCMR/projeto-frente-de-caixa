const knex = require("../../conexao");

const verificaEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
      
        const buscaEmail = await knex("usuarios").where({email}).first();
       
        if(buscaEmail) {
            
            return res.status(400).json({mensagem: "O email informado já foi utilizado."});
        }

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = verificaEmail;