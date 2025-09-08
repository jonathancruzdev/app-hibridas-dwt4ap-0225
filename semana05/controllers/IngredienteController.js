const Ingrediente = require('../models/IngredienteModel');

const crearIngrediente = async ( request, response) => {
    const body = request.body;
    const nuevo = new Ingrediente( body );
    const data = await nuevo.save();

    response.json( data);
}

module.exports = { crearIngrediente };