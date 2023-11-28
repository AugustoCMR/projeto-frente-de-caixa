const knex = require("../../conexao");

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
               
                let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first().debug();

                valorTotal += parseInt(valorProduto.valor); 
            }
        }

        const cadastrarPedido = await knex("pedidos").insert({cliente_id, observacao, valor_total: valorTotal}).returning("id");

       
        console.log("oi")
        for(let produto of pedido_produtos) {
           
            let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first();

            await knex("pedido_produtos").insert({pedido_id: cadastrarPedido[0].id,produto_id: produto.produto_id, quantidade_produto: produto.quantidade_produto, valor_produto: valorProduto.valor});
        }

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