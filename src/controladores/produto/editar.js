const knex = require("../../conexao");

const editarProduto = async (req, res) => {
    const {descricao, quantidade_estoque, valor, categoria_id} = req.body
    const { id } = req.params;

    try {
        
        await knex("produtos").update({descricao, quantidade_estoque, valor, categoria_id}).where({id});

        return res.status(200).json({mensagem: "O produto foi atualizado com sucesso."});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = editarProduto;