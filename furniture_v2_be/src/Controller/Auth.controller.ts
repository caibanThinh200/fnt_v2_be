import AuthService from "../Service/Auth.service";
import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";

class AuthController {
    public static async Login(req: Request, res: Response) {
        try {
            const result = await AuthService.LoginService(req);
            if(!(result as any).accessToken) {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.failed,
                    error: {
                        code: 401,
                        message: TAG_DEFINE.VALIDATION.USER.invalidUser
                    }
                })
            } else {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.sucess,
                    error: null,
                    result
                })
            }
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
            if(result === CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.REGISTER.success, 200)) {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.sucess,
                    error: null,
                    result
                });
            } else {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.failed,
                    error: {
                        code: 501,
                        message: CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.REGISTER.failed, 500)
                    },
                    result: null
                });
            }
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

    public static async GetDetailUserController(req: Request, res: Response) {
        try {
            const result = await AuthService.GetDetailUserService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.getDetail, 500)
                }
            });
        }
    }

    public static async UpdateUserController(req: Request, res: Response) {
        try {
            const result = await AuthService.UpdateUserService(req);
            res.status(200).json({
                status: TAG_DEFINE.STATUS.sucess,
                error: null,
                result
            });
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.update, 500)
                }
            });
        }
    }

    public static async GetUserByJWTController(req: Request, res: Response) {
        try {
            const result = await AuthService.GetUserByJWT(req);
            if(result) {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.sucess,
                    error: null,
                    result
                });
            } else {
                res.status(200).json({
                    status: TAG_DEFINE.STATUS.failed,
                    error: {
                        code: 404,
                        message: CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.getDetail, 500)
                    },
                    result: null
                });
            }
        } catch(e) {
            logger.error(e);
            res.status(400).json({
                status: TAG_DEFINE.STATUS.failed,
                error: {
                    code: 500,
                    mesage: CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.getDetail, 500)
                }
            });
        }
    }
}

export default AuthController;
