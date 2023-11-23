const express = require("express");
const rotas = express.Router();
const cadastrarCliente = require("../controladores/cliente/cadastrar");
const editarCliente = require("../controladores/cliente/editar");
const listarClientes = require("../controladores/cliente/listar");
const detalharCliente = require("../controladores/cliente/detalhar");

const validaEmailCliente = require("../intermediarios/cliente/validaEmail");
const validaCpfCliente = require("../intermediarios/cliente/validaCPF");
const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/cliente/schemaCadastro");

rotas.post("/cliente", validaSchema(schemaCadastro),validaEmailCliente, validaCpfCliente,cadastrarCliente);
rotas.put("/cliente/:id", editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", detalharCliente);


module.exports = rotas