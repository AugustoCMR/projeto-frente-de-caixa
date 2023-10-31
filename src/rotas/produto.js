const express = require("express");
const rotas = express.Router();
const cadastrarProduto = require("../controladores/produto/cadastrar");
const editarProduto = require("../controladores/produto/editar");
const listarProdutos = require("../controladores/produto/listar");
const detalharProduto = require("../controladores/produto/detalhar");

rotas.post("/produto", cadastrarProduto);
rotas.put("/produto/:id", editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto);

module.exports = rotas