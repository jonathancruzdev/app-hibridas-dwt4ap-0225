import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recetaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tiempo: {
        type: Number,
        required: true
    },
    detalle: {
        type: String
    },
    portada: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    }
})

const Receta = mongoose.model('Receta', recetaSchema);
export default Receta;
