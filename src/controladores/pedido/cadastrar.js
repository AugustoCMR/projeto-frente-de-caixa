const knex = require("../../conexao");
const {enviarEmail} = require("../../utils/funcoes_cadastrarPedido");

const cadastrarPedido = async (req, res) => {
    const {cliente_id, observacao, pedido_produtos} = req.body;

    try {
        
        let valorTotal = 0;
        let arrayProdutos = [];

        if(pedido_produtos) {
            for(let produto of pedido_produtos) {
                arrayProdutos.push({
                    produto_id: produto.produto_id,
                    quantidade_produto: produto.quantidade_produto
                });
               
                let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first();

                let calculaQuantidade = parseInt(valorProduto.valor * produto.quantidade_produto);
                
                valorTotal += calculaQuantidade; 
            }
        }

        const cadastrarPedido = await knex("pedidos").insert({cliente_id, observacao, valor_total: valorTotal}).returning("id");

        for(let produto of pedido_produtos) {
           
            let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first();

            await knex("pedido_produtos").insert({pedido_id: cadastrarPedido[0].id,produto_id: produto.produto_id, quantidade_produto: produto.quantidade_produto, valor_produto: valorProduto.valor});

            await knex("produtos").decrement("quantidade_estoque", produto.quantidade_produto).where({id: produto.produto_id});
        }

        enviarEmail();

        return res.status(201).json({
            cliente_id,
            observacao,
            pedido_produtos: arrayProdutos
        });

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = cadastrarPedido