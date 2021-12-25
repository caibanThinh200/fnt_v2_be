import express from 'express';
import controller from '../Controller/Auth.controller';
import PATH from '../Constant/url';
import { ValidateRegister, ValidateJWT } from '../Middleware/auth.middleware';

const router = express();

router.post(PATH.AUTH.login, controller.Login);
router.post(PATH.AUTH.register, ValidateRegister, controller.Register);
router.get(PATH.AUTH.detail, controller.GetDetailUserController);
router.get(PATH.AUTH.infoJWT, ValidateJWT, controller.GetUserByJWTController);
router.put(PATH.APP.params.replace("params", "id"), controller.UpdateUserController);

export default router;
