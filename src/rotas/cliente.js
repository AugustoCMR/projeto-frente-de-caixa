const express = require("express");
const rotas = express.Router();
const cadastrarCliente = require("../controladores/cliente/cadastrar");
const editarCliente = require("../controladores/cliente/editar");
const listarClientes = require("../controladores/cliente/listar");

rotas.post("/cliente", cadastrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente", listarClientes);


module.exports = rotas