const knex = require("../../conexao");

const detalharCliente = async (req, res) => {
    const { id } = req.params;

    try {
        
        const clienteDetalhado = await knex("clientes").where({id});

        return res.status(200).json(clienteDetalhado);

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = detalharCliente;