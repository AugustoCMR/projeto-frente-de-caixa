const knex = require("../../conexao");

const validaIdCliente = async (req, res, next) =>{
    const { id } = req.params;

    try {
        
        if(id.includes(".") || isNaN(id)) {
            return res.status(400).json({mensagem: "O ID informado é inválido"});
        }

        const buscaCliente = await knex("clientes").where({ id }).first();

        if(!buscaCliente) {
            return res.status(404).json({mensagem: "O ID informado não existe"});
        }

        next();

    } catch (error) {
        
    }
}

module.exports = validaIdCliente;