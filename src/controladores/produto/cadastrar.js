const knex = require("../../conexao")

const cadastrarProduto = async (req, res) => {
    const {descricao, quantidade_estoque, valor, categoria_id} = req.body;

    try {
        
        await knex("produtos").insert({descricao, quantidade_estoque, valor, categoria_id});

        return res.status(201).json({mensagem: "Produto cadastrado com sucesso."});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = cadastrarProduto;