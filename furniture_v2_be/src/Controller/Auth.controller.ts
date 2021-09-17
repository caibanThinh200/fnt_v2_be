import AuthService from "../Service/Auth.service";
import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";

class AuthController {
    public static async Login(req: Request, res: Response) {
        try {
            const result = await AuthService.LoginService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            })
        } catch (error) {
            logger.error(error);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.LOGIN.failed,
                        500
                    ),
                },
            });
        }
    }

    public static async Register(req: Request, res: Response) {
        try {
            const result = await AuthService.RegisterService(req);

            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result,
            });
        } catch (error) {
            logger.error(error);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.REGISTER.failed,
                        500
                    ),
                },
            });
        }
    }
}

export default AuthController;
