import { Router } from 'express';
import { createAction, getActions } from '../controllers/actionController';

const router = Router();

router.post('/actions', createAction)
router.get('/actions/get/', getActions)

export default router;