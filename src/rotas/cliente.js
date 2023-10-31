const express = require("express");
const rotas = express.Router();
const cadastrarCliente = require("../controladores/cliente/cadastrar");
const editarCliente = require("../controladores/cliente/editar");

rotas.post("/cliente", cadastrarCliente);
rotas.put("/cliente/:id", editarCliente);


module.exports = rotas