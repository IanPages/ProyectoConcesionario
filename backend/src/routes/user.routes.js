import  {Router} from 'express';
import {getUser, createUser,loginUser} from '../controller/user.controller.js';

const router = Router();

router.post('/signup',createUser);
router.post('/login',loginUser);
router.get('/users/:id',getUser);

export default router;