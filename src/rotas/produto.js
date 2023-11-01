const express = require("express");
const rotas = express.Router();

const cadastrarProduto = require("../controladores/produto/cadastrar");
const editarProduto = require("../controladores/produto/editar");
const listarProdutos = require("../controladores/produto/listar");
const detalharProduto = require("../controladores/produto/detalhar");
const deletarProduto = require("../controladores/produto/deletar");

const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/produto/schemaCadastro");

const validaIdCategoria = require("../intermediarios/categoria/validaId");

rotas.post("/produto", validaSchema(schemaCadastro), validaIdCategoria, cadastrarProduto);
rotas.put("/produto/:id", editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", detalharProduto);
rotas.delete("/produto/:id", deletarProduto);

module.exports = rotas