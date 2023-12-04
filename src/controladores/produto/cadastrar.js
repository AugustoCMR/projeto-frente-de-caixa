const knex = require("../../conexao")
const { uploadDeImagem } = require("../../utils/upload_arquivos/upload_aws");

const cadastrarProduto = async (req, res) => {
    const {descricao, quantidade_estoque, valor, categoria_id} = req.body;

    try {
        
        let produto = await knex("produtos").insert({descricao, quantidade_estoque, valor, categoria_id}).returning("*");

        if (req.file) {
            const { originalname, mimetype, buffer } = req.file;
            const id = produto[0].id;
      
            const imagem = await uploadDeImagem(
              `produtos/${id}/${originalname}`,
              buffer,
              mimetype
            );
      
            produto = await knex("produtos")
              .update({ produto_imagem: imagem.url })
              .where({ id })
              .returning("*");
        }

        return res.status(201).json(produto[0]);

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = cadastrarProduto;