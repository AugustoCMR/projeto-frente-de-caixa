const knex = require("../../conexao");
const { atualizarImagemDoProduto, atualizarProdutoNoBanco } = require('../../utils/upload_arquivos/atualizarImagem');

const editarProduto = async (req, res) => {
    const {descricao, quantidade_estoque, valor, categoria_id} = req.body
    const { id } = req.params;

    try {
        
        await atualizarProdutoNoBanco(id, descricao, quantidade_estoque, valor, categoria_id);  

        if (req.file) {
            await atualizarImagemDoProduto(id, req.file)
        }

        return res.status(200).json({mensagem: "O produto foi atualizado com sucesso."});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = editarProduto;