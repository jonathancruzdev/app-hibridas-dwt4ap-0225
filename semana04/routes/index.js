const usuarioRoutas = require('./UsuarioRouter');

const routerAPI = ( app ) =>{
    app.use('usuarios/', usuarioRoutas);
}

module.exports = routerAPI;