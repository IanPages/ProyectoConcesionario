import {Router} from 'express';
import {getCategorias,getCategoria,getCategoriaCoches,createCategoria,updateCategoria,deleteCategoria} from '../controller/categoria.controller.js';

const router= Router();

router.get('/categorias',getCategorias);
router.post('/categorias',createCategoria);
router.put('/categorias/:id',updateCategoria);
router.delete('/categorias/:id',deleteCategoria);
router.get('/categorias/:id',getCategoria);

router.get('/categorias/:id/coches',getCategoriaCoches);

export default router;