const express = require("express");
const rotas = express.Router();

const cadastrarPedido = require("../controladores/pedido/cadastrar");

const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/pedido/schemaCadastro");


rotas.post("/pedido", validaSchema(schemaCadastro), cadastrarPedido);

module.exports = rotas;