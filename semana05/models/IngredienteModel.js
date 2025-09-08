const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: String,
    unidad: String,
    cantidad: Number
})

const Ingrediente = mongoose.model('Ingrediente', esquema);
module.exports = Ingrediente;