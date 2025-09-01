const express = require('express');
const router = express.Router();

const { crearUsuario, listarUsuarios } = require('../controllers/UsuarioController');

// Creamos las rutas
router.get('/', listarUsuarios);
router.post('/', crearUsuario);


module.exports = router;