import {Router} from 'express';
import { getFormularios, getFormulario, createFormulario, updateFormulario, deleteFormulario} from '../controller/formulario.controller.js';

const router = Router();

router.get('/formularios',getFormularios);
router.post('/formularios',createFormulario);
router.put('/formularios/:id',updateFormulario);
router.delete('/formularios/:id',deleteFormulario);
router.get('/formularios/:id',getFormulario);

export default router;