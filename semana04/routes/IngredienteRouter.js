const express = require('express');
const router = express.Router();

const { crearIngrediente } = require('../controllers/IngredienteController');

router.post('/', crearIngrediente);

module.exports = router;