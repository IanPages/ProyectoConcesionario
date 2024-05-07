import {Router} from 'express';
import { getCoches, getCoche, createCoche, updateCoche, deleteCoche} from '../controller/coche.controller.js';

const router = Router();

router.get('/coches',getCoches);
router.post('/coches',createCoche);
router.put('/coches/:id',updateCoche);
router.delete('/coches/:id',deleteCoche);
router.get('/coches/:id',getCoche);

export default router;