const express = require("express");
const rotas = express.Router();
const cadastrarCliente = require("../controladores/cliente/cadastrar");

rotas.post("/cliente", cadastrarCliente);


module.exports = rotas