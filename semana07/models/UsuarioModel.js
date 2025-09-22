// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Definimos el esquema
const esquema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    clave: String,
    tel: String
});

const Usuario = mongoose.model('Usuario', esquema);
// module.exports = Usuario;
export default Usuario;