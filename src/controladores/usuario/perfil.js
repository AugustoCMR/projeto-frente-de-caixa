const perfil = async (req, res) => {
    const {senha: senha, ...usuario} = req.usuario;
    return res.status(200).json(usuario);
}

module.exports = perfil