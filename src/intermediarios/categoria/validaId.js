const knex = require("../../conexao");

const validaIdCategoria = async (req, res, next) => {
    const { categoria_id } = req.body;

    try {
        
        const buscaCategoria = await knex("categorias").where({id: categoria_id}).first();
    
        if(!buscaCategoria) {

            return res.status(400).json({mensagem: "O id da categoria informado não existe."});

        }

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `Ocorreu um erro interno do servidor: ${error.message}`});
    }
}

module.exports = validaIdCategoria