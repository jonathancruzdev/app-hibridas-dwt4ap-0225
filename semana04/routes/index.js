const usuarioRuta = require('./UsuarioRouter');
const ingredienteRuta = require('./IngredienteRouter');

const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
    app.use('/api/ingredientes', ingredienteRuta);
}

module.exports = routerAPI;