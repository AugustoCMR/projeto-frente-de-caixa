const knex = require("../../conexao");

const validaDeletarProduto = async (req, res, next) => {
    const { id } = req.params;

    try {
        
        const buscaPedido_Produto = await knex("pedido_produtos").where({produto_id: id}).first();

        if(buscaPedido_Produto) {
            return res.status(400).json({mensagem: "O produto informado não pode ser deletado, pois está vinculado a um pedido"});
        }

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = validaDeletarProduto;
