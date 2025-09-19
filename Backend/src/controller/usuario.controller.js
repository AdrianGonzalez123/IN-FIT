const usuarioCtl = {};

const Usuario = require('../models/Usuario')

usuarioCtl.getUsu = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtl.createUsu = async (req, res) => {
    const {nombre, email, password} = req.body;
    const newUsuario = new Usuario({nombre: nombre, email: email, password: password});
    await newUsuario.save();
    res.json({message: 'Usuario creado'});
}

usuarioCtl.getUsuById = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtl.deleteUsu = async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario eliminado'});
}

usuarioCtl.updateUsu = async (req, res) => {
    const {nombre, email, password} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {nombre, email, password});
    res.json({message: 'Usuario actualizado'});
}

module.exports = usuarioCtl;