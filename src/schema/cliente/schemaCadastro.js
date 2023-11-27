const joi = require("joi");

const schemaCadastro = joi.object({
    nome: joi.string().empty("").trim().required().messages({
        "any.required": "O campo nome é obrigatório",
        "string.empyt": "O campo nome é obrigatório",
    }),
    email: joi.string().email().required().messages({
        "string.email": "O campo email precisa ter um formato válido",
        "any.required": "O campo email é obrigatório",
        "string.empty": "O campo email é obrigatório"
    }),
    cpf: joi.string().required().empty("").length(11).regex(/^\d+$/).messages({
        "any.required": "O campo CPF é obrigatório",
        "string.required": "O campo CPF é obrigatório",
        "string.empyt": "O campo CPF é obrigatório",
        "string.pattern.base": "O CPF deve conter apenas números",
        "string.length": "O campo CPF deve conter 11 dígitos"
    }),
    cep: joi.string().allow(null || ""),
    rua: joi.string().allow(null),
    numero: joi.string().allow(null || ""),
    bairro: joi.string().allow(null),
    cidade: joi.string().allow(null),
    estado: joi.string().allow(null)

})

module.exports = schemaCadastro;