const knex = require("../../conexao");

const deletarProduto = async (req, res) => {
    const { id } = req.params;

    try {
        
        await knex("produtos").where({id}).del();

        return res.status(204).send();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}