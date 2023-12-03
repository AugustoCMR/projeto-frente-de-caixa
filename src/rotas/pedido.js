const express = require("express");
const rotas = express.Router();

const cadastrarPedido = require("../controladores/pedido/cadastrar");
const listarPedidos = require("../controladores/pedido/listar");

const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/pedido/schemaCadastro");
const validaIdPedido = require("../intermediarios/pedido/verificaIdCliente");
const validaIdProduto = require("../intermediarios/pedido/verificaIdProduto");
const validaListarPedido = require("../intermediarios/pedido/validaListar");

rotas.post("/pedido", validaSchema(schemaCadastro), validaIdPedido, validaIdProduto, cadastrarPedido);
rotas.get("/pedido", validaListarPedido, listarPedidos);

module.exports = rotas;