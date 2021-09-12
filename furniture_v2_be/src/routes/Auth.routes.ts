import express from 'express';
import controller from '../controllers/Auth.controller';

const router = express.Router();

router.post('/login', controller.Login);
router.post('/register', controller.Register);

export default router;
