const joi = require("joi");

const schemaCadastro = joi.object({
    descricao: joi.string().trim().required().messages({
        "any.required": "O campo descrição é obrigatório",
        "string.empty": "O campo descrição é obrigatório"
    }),
    quantidade_estoque: joi.number().integer().min(0).required().messages({
        "any.required": "O campo estoque é obrigatório",
        "number.integer": "O campo estoque deve ser um número inteiro",
        "number.base": "O campo estoque é obrigatório e deve conter apenas números",
        "number.min": "O campo estoque não pode ser negativo"     
    }),
    valor: joi.number().min(1).required().messages({
        "any.required": "O campo valor é obrigatório",
        "number.base": "O campo valor é obrigatório e deve conter apenas números",
        "number.min": "O campo valor deve ser maior que zero"
    }),
    categoria_id: joi.number().integer().required().messages({
        "any.required": "O campo id da categoria é obrigatório",
        "number.base": "O campo id da categoria não pode ser vazio e deve conter apenas números",
        "number.integer": "O campo categoria_id deve ser um número inteiro"
    })
})

module.exports = schemaCadastro;