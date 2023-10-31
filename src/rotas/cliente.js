const express = require("express");
const rotas = express.Router();
const cadastrarCliente = require("../controladores/cliente/cadastrar");
const editarCliente = require("../controladores/cliente/editar");
const listarClientes = require("../controladores/cliente/listar");
const detalharCliente = require("../controladores/cliente/detalhar");

rotas.post("/cliente", cadastrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", detalharCliente);


module.exports = rotas