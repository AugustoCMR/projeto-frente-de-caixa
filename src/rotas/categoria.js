const express = require("express");
const rotas = express.Router();
const knex = require("../conexao");
const { listarCategorias } = require("../controladores/categoria/listar");

rotas.get("/categoria", listarCategorias);

module.exports = rotas