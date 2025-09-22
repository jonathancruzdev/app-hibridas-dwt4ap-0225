// const usuarioRuta = require('./UsuarioRouter');
///const ingredienteRuta = require('./IngredienteRouter');

import usuarioRuta from './UsuarioRouter.js';
//import ingredienteRuta from './IngredienteRouter.js';


const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
   // app.use('/api/ingredientes', ingredienteRuta);
}
export default routerAPI;
//module.exports = routerAPI;