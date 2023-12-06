const nodemailer = require("nodemailer");
const knex = require("../conexao");

const calculaValorTotal = async (pedido_produtos) => {

  let valorTotal = 0;

  for(let produto of pedido_produtos) {
      
    let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first();
  
    let calculaQuantidade = parseInt(valorProduto.valor * produto.quantidade_produto);
      
    valorTotal += calculaQuantidade; 
  }
  
  return valorTotal;
}

const cadastrarProdutos_Pedidos = async (cliente_id, observacao,valorTotal, pedido_produtos) => {

  let arrayProdutos = [];

 

  const cadastrarPedido = await knex("pedidos").insert({cliente_id, observacao, valor_total: valorTotal}).returning("id");

  for(let produto of pedido_produtos) {
      
    arrayProdutos.push({
        produto_id: produto.produto_id,
        quantidade_produto: produto.quantidade_produto
    });
  
    let valorProduto = await knex("produtos").select("valor").where({id: produto.produto_id}).first();
  
    await knex("pedido_produtos").insert({pedido_id: cadastrarPedido[0].id,produto_id: produto.produto_id, quantidade_produto: produto.quantidade_produto, valor_produto: valorProduto.valor});
  
    await knex("produtos").decrement("quantidade_estoque", produto.quantidade_produto).where({id: produto.produto_id});
  }

    return arrayProdutos;

  } 

const enviarEmail = async () => {

    let transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    let message = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>Seu pedido foi confirmado com sucesso!</p>"
    };

    transport.sendMail(message);
}

module.exports = {
    enviarEmail,
    calculaValorTotal,
    cadastrarProdutos_Pedidos
}

