import usuarioRuta from './UsuarioRouter.js';
import recetaRuta from './RecetaRouter.js'


const routerAPI = ( app ) =>{
    app.use('/api/usuarios', usuarioRuta);
   app.use('/api/recetas', recetaRuta);
}
export default routerAPI;