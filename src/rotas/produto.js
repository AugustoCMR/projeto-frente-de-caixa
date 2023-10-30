const express = require("express");
const rotas = express.Router();
const cadastrarProduto = require("../controladores/produto/cadastrar");
const editarProduto = require("../controladores/produto/editar");
const listarProdutos = require("../controladores/produto/listar");

rotas.post("/produto", cadastrarProduto);
rotas.put("/produto/:id", editarProduto);
rotas.get("/produto", listarProdutos);

module.exports = rotas