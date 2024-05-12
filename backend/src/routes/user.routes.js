import  {Router} from 'express';
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controller/user.controller.js';

const router = Router();

router.get('/users',getUsers);
router.post('/users',createUser);
router.put('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);
router.get('/users/:id',getUser);

export default router;