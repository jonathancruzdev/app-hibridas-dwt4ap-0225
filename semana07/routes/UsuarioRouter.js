import express from 'express';
import { 
        crearUsuario, 
        listarUsuarios, 
        getUserById,
        deleteUserById,
        updeteUserById,
        auth 
    } from '../controllers/UsuarioController.js';
import { validarJWT} from '../middlewares/auth.js';
const router = express.Router();

// Creamos las rutas
router.get('/', listarUsuarios);
router.get('/:id', validarJWT,  getUserById);
router.delete('/:id',validarJWT, deleteUserById);
router.put('/:id', validarJWT, updeteUserById);
router.post('/', crearUsuario);
router.post('/auth', auth);

export default router;