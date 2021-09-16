import express from 'express';
import controller from '../Controller/Auth.controller';
import PATH from '../Constant/url';

const router = express();

router.post(PATH.AUTH.login, controller.Login)
router.post(PATH.AUTH.register, controller.Register)

export default router;
