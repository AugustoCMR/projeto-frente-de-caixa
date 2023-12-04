const knex = require("../../conexao");
const { deleteImagem, buscarImagem } = require("../../utils/upload_arquivos/upload_aws")

const deletarProduto = async (req, res) => {
    const { id } = req.params;

    try {
        
        await knex("produtos").where({ id }).del();

        const imagem_bucket = await buscarImagem(id);

        if (imagem_bucket.length > 0) {
            await deleteImagem(imagem_bucket[0].Key);
        }

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = deletarProduto;