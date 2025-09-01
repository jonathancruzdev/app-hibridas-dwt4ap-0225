const Usuario = require('../models/UsuarioModel');

const crearUsuario = async ( request, response) =>{
    const body = request.body;
    const nuevoUsuario =  new Usuario(body);
    await nuevoUsuario.save();
}

const listarUsuarios = async ( request, response) =>{
    const usuarios = await Usuario.find();
    response.json( {data: usuarios });
}

module.exports = { crearUsuario, listarUsuarios }