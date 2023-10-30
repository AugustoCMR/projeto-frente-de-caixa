const express = require("express");
const rotas = express.Router();
const cadastrarProduto = require("../controladores/produto/cadastrar");

rotas.post("/produto", cadastrarProduto);

module.exports = rotas