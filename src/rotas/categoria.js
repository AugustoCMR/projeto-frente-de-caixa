const express = require("express");
const rotas = express.Router();
const { listarCategorias } = require("../controladores/categoria/listar");

rotas.get("/categoria", listarCategorias);

module.exports = rotas