//const express = require('express');
import express from 'express';
import { 
        crearUsuario, 
        listarUsuarios, 
        getUserById,
        deleteUserById,
        updeteUserById 
    } from '../controllers/UsuarioController.js';
const router = express.Router();

// const { crearUsuario, listarUsuarios } = require('../controllers/UsuarioController');

// Creamos las rutas
router.get('/', listarUsuarios);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.put('/:id', updeteUserById);
router.post('/', crearUsuario);

export default router;

//module.exports = router;