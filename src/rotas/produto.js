const express = require("express");
const rotas = express.Router();

const multer = require("../utils/upload_arquivos/multer");
const cadastrarProduto = require("../controladores/produto/cadastrar");
const editarProduto = require("../controladores/produto/editar");
const listarProdutos = require("../controladores/produto/listar");
const detalharProduto = require("../controladores/produto/detalhar");
const deletarProduto = require("../controladores/produto/deletar");

const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/produto/schemaCadastro");

const validaIdCategoria = require("../intermediarios/categoria/validaId");
const validaIdProduto = require("../intermediarios/produto/validaId");
const validaDeletarProduto = require("../intermediarios/produto/deletar");

rotas.post("/produto", multer.single('produto_imagem'), validaSchema(schemaCadastro), validaIdCategoria, cadastrarProduto);
rotas.put("/produto/:id", multer.single('produto_imagem'), validaIdProduto, validaSchema(schemaCadastro), validaIdCategoria, editarProduto);
rotas.get("/produto", listarProdutos);
rotas.get("/produto/:id", validaIdProduto, detalharProduto);
rotas.delete("/produto/:id", validaIdProduto, validaDeletarProduto, deletarProduto);

module.exports = rotas