const knex = require("../../conexao");

const cadastrarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado} = req.body;

    try {
        
        await knex("clientes").insert({nome, email, cpf, cep, rua, numero, bairro, cidade, estado});

        return res.status(201).json({mensagem: "Cliente cadastrado com sucesso."});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = cadastrarCliente;