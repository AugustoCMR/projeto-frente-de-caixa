const express = require("express");
const rotas = express.Router();

const cadastrarPedido = require("../controladores/pedido/cadastrar");

const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/pedido/schemaCadastro");
const validaIdPedido = require("../intermediarios/pedido/verificaIdCliente");
const validaIdProduto = require("../intermediarios/pedido/verificaIdProduto");


rotas.post("/pedido", validaSchema(schemaCadastro), validaIdPedido, validaIdProduto, cadastrarPedido);


module.exports = rotas;