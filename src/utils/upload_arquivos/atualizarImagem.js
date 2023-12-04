const knex = require('../../conexao');
const { buscarImagem, deleteImagem, uploadDeImagem } = require('../upload_arquivos/upload_aws');

const atualizarImagemDoProduto = async (id, file) => {
    const imagem = await buscarImagem(id);

    if (imagem.length > 0) {
        await deleteImagem(imagem[0].Key);
    }

    const { originalname, buffer, mimetype } = file;
    const imagem_bucket = await uploadDeImagem(`produtos/${id}/${originalname}`, buffer, mimetype);

    await knex('produtos').update({ produto_imagem: imagem_bucket.url }).where({ id });
};


const atualizarProdutoNoBanco = async (id, descricao, quantidade_estoque, valorEmCentavos, categoria_id) => {
    return await knex('produtos')
        .update({ descricao, quantidade_estoque, valor: valorEmCentavos, categoria_id })
        .where({ id })
};

module.exports = {
    atualizarImagemDoProduto,
    atualizarProdutoNoBanco
}