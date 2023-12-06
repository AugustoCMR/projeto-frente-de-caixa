const knex = require("../../conexao");
const {enviarEmail, calculaValorTotal, cadastrarProdutos_Pedidos} = require("../../utils/funcoes_cadastrarPedido");

const cadastrarPedido = async (req, res) => {
    const {cliente_id, observacao, pedido_produtos} = req.body;

    try {
        
        let valorTotal = await calculaValorTotal(pedido_produtos);
    
        let arrayProdutos = await cadastrarProdutos_Pedidos(cliente_id,observacao, valorTotal, pedido_produtos);

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