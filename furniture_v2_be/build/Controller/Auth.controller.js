"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_service_1 = __importDefault(require("../Service/Auth.service"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
class AuthController {
    static async Login(req, res) {
        try {
            const result = await Auth_service_1.default.LoginService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (error) {
            logger_1.default.error(error);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.AUTH.LOGIN.failed, 500),
                },
            });
        }
    }
    static async Register(req, res) {
        try {
            const result = await Auth_service_1.default.RegisterService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result,
            });
        }
        catch (error) {
            logger_1.default.error(error);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.AUTH.REGISTER.failed, 500),
                },
            });
        }
    }
    static async GetDetailUserController(req, res) {
        try {
            const result = await Auth_service_1.default.GetDetailUserService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.AUTH.getDetail, 500)
                }
            });
        }
    }
    static async UpdateUserController(req, res) {
        try {
            const result = await Auth_service_1.default.UpdateUserService(req);
            res.status(200).json({
                status: define_1.default.STATUS.sucess,
                error: null,
                result
            });
        }
        catch (e) {
            logger_1.default.error(e);
            res.status(400).json({
                status: define_1.default.STATUS.failed,
                error: {
                    code: 500,
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.AUTH.getDetail, 500)
                }
            });
        }
    }
}
exports.default = AuthController;
