const express = require("express");
const rotas = express.Router();
const cadastrarProduto = require("../controladores/produto/cadastrar");
const editarProduto = require("../controladores/produto/editar");

rotas.post("/produto", cadastrarProduto);
rotas.put("/produto/:id", editarProduto);

module.exports = rotas