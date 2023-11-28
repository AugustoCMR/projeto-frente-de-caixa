const joi = require("joi");

const schemaCadastro = joi.object({
    cliente_id: joi.number().integer().required().messages({
        "any.required": "O campo do ID do Cliente é obrigatório.",
        "number.integer": "O campo do ID do Cliente deve ser um número inteiro",
        "number.base": "O campo do ID do Cliente deve conter apenas números."
    }),
    pedido_produtos: joi.array().min(1).items(joi.object({
        produto_id: joi.number().integer().required().messages({
            'any.required': 'Campo ID do produto obrigatório',
            'number.base': 'Deve ser passado um ID válido para produto',
            "number.integer": "O campo do ID do Produto deve ser um número inteiro",
        }),
        quantidade_produto: joi.number().integer().min(1).required().messages({
            'any.required': 'Campo da Quantidade do produto é obrigatório',
            'number.base': 'Campo da Quantidade do produto deve ser preenchida corretamente',
            'number.min': 'Quantidade inválida',
            "number.integer": "O Campo da Quantidade do Produto deve ser um número inteiro"
        })
    })  
    ).required().messages({
        "any.required": "O campo do pedido com algum produto é obrigatório.",
        "array.base": "Os produtos do pedido foram inseridos incorretamente.",
        "array.min": "O campo do pedido deve ter no mínimo um produto incluso"
    }),
    observacao: joi.string().allow(null || "")
})

module.exports = schemaCadastro;