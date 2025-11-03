import mongoose from 'mongoose';
const Schema = mongoose.Schema;
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
export default Usuario;