const knex = require("../../conexao");

const validaListarPedido = async (req, res, next) => {
    const { cliente_id } = req.query;

    try {
        
        const buscaIdCliente = knex("pedidos").where({cliente_id}).first();

        if(isNaN(cliente_id) || cliente_id.includes(".")) {
           return res.status(400).json({mensagem: "Digite um ID válido."});
        }

        if(!buscaIdCliente) {
           return res.status(404).json({mensagem: "ID informado não encontrado."});
        }

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = validaListarPedido;