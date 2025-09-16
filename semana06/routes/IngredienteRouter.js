import express from 'express';
const router = express.Router();

const { crearIngrediente } = require('../controllers/IngredienteController');

router.post('/', crearIngrediente);

export default router;