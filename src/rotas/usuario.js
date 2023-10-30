const express = require("express");
const rotas = express.Router();

const cadastrar = require("../controladores/usuario/cadastrar");
const login = require("../controladores/usuario/login");
const perfil = require("../controladores/usuario/perfil");
const atualizar = require("../controladores/usuario/atualizar");
const autenticaUsuario = require("../intermediarios/usuario/autenticacaoUsuario");
const validaSchema = require("../intermediarios/validaSchema");
const schemaCadastro = require("../schema/usuario/schemaCadastro");
const schemaLogin = require("../schema/usuario/schemaLogin");
const verificaEmail = require("../intermediarios/usuario/verificaEmail");
const validaLogin = require("../intermediarios/usuario/validaLogin");

rotas.post("/usuario", validaSchema(schemaCadastro), verificaEmail,cadastrar);
rotas.post("/login", validaSchema(schemaLogin), validaLogin, login);

rotas.use(autenticaUsuario);

rotas.get("/usuario", perfil);
rotas.put("/usuario", validaSchema(schemaCadastro), verificaEmail,atualizar);



module.exports = rotas