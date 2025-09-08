//const Usuario = require('../models/UsuarioModel');
import Usuario from "../models/UsuarioModel.js";
const crearUsuario = async ( request, response) =>{
    const body = request.body;
    const nuevoUsuario =  new Usuario(body);
    const usuario = await nuevoUsuario.save();

    response.json({ msg: "Usuario creado", data: usuario});
}

const listarUsuarios = async ( request, response) =>{
    const usuarios = await Usuario.find();
    response.json( {data: usuarios });
}

const getUserById = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findById(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}

const deleteUserById = async ( request, response) => {
    const id = request.params.id;
    const user = await Usuario.findByIdAndDelete(id);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}
const updeteUserById = async ( request, response) => {
    const id = request.params.id;
    const body = request.body;

    const user = await Usuario.findByIdAndUpdate(id, body);
    if( user){
        response.status(200).json( {data: user});
    } else {
        response.status(404).json({ msg: 'Usuario no Encontrado'});
    }
}


export { crearUsuario, listarUsuarios, getUserById, deleteUserById, updeteUserById };
//module.exports = { crearUsuario, listarUsuarios }