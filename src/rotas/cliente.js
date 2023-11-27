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
const validaIdCliente = require("../intermediarios/cliente/validaId");
const validaEditarCliente = require("../intermediarios/cliente/validaEditar");

rotas.post("/cliente", validaSchema(schemaCadastro), validaEmailCliente, validaCpfCliente,cadastrarCliente);
rotas.put("/cliente/:id",  validaSchema(schemaCadastro), validaIdCliente, validaEditarCliente, editarCliente);
rotas.get("/cliente", listarClientes);
rotas.get("/cliente/:id", validaIdCliente, detalharCliente);


module.exports = rotas