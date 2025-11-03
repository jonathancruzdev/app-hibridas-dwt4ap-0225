import express from "express";
import { validarJWT } from "../middlewares/auth.js"
import { getRecetas, postReceta, putReceta } from "../controllers/RecetaController.js";

const router = express.Router();

router.get('/', validarJWT, getRecetas);
router.post('/', validarJWT, postReceta);
router.patch('/:id', validarJWT, putReceta);



export default router