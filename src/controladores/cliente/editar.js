const knex = require("../../conexao");

const editarCliente = async (req, res) => {
    const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado} = req.body;

    const { id } = req.params;

    try {
        
        await knex("clientes").insert({nome, email, cpf, cep, rua, numero, bairro, cidade, estado}).where({id});

        return res.status(200).json({mensagem: "Cliente atualizado com sucesso."});

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = editarCliente;