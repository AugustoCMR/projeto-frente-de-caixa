const knex = require("../../conexao");

const verificaIdProduto = async (req, res, next) => {
    const {pedido_produtos} = req.body;

    for(let produto of pedido_produtos) {
        const buscaProduto = await knex("produtos").where({id: produto.produto_id}).first();


        if(!buscaProduto) {
            return res.status(404).json({mensagem: `Um ID de produto informado não existe.`})
        }

        if(buscaProduto.quantidade_estoque < produto.quantidade_produto) {
            return res.status(400).json({mensagem: "A quantidade em estoque é menor que a solicitada"});
        }

    }

    next();
}

module.exports = verificaIdProduto;