import {Router} from 'express';
import { getMarcas, getMarca, createMarca, updateMarca, deleteMarca,getMarcaCoches} from '../controller/marca.controller.js';

const router = Router();

router.get('/marcas',getMarcas);
router.post('/marcas',createMarca);
router.put('/marcas/:id',updateMarca);
router.delete('/marcas/:id',deleteMarca);
router.get('/marcas/:id',getMarca);

router.get('/marcas/:id/coches', getMarcaCoches);

export default router;