import { Router } from 'express';
import { createUser, deleteUser, getUser, updateUser } from './user.controller';

const router = Router();

router
    .route('/')
    .post(createUser);

router
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

export default router;