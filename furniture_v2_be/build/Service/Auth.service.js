"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const UserFactory_1 = require("../Factory/Creator/UserFactory");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    static async RegisterService(req) {
        const type = req.headers.type;
        try {
            const userFactory = UserFactory_1.UserFactory.createUser(req.body, type);
            const user = UserFactory_1.UserFactory.createSchema(userFactory, type);
            const result = await user
                .save()
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.AUTH.REGISTER.success, 200))
                .catch((e) => {
                logger_1.default.error(e);
                return function_1.default.getActionResult(define_1.default.RESULT.AUTH.REGISTER.failed, 500);
            });
            return result;
        }
        catch (error) {
            logger_1.default.error(error);
        }
    }
    static async LoginService(req) {
        const type = req.headers.type;
        const { username, password } = req.body;
        try {
            const existingUser = await UserFactory_1.UserFactory.getSchema(type).findOne({ username });
            if (!existingUser) {
                return function_1.default.getActionResult(define_1.default.RESULT.AUTH.LOGIN.failed, 401);
            }
            const comparePassword = await bcrypt_1.default.compare(password, existingUser.password);
            if (!comparePassword) {
                return function_1.default.getActionResult(define_1.default.RESULT.AUTH.LOGIN.failed, 401);
            }
            // JWT
            const token = jsonwebtoken_1.default.sign({
                ...existingUser._doc,
                password: undefined,
            }, process.env.SECRET_JWT, { expiresIn: '1 day' });
            const result = function_1.default.getActionResult(define_1.default.RESULT.AUTH.LOGIN.success, 200);
            return {
                result,
                accessToken: token,
            };
        }
        catch (error) {
            logger_1.default.error(error);
        }
    }
    static async GetDetailUserService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const user = await UserFactory_1.UserFactory.getSchema(type).find({
                type,
                _id: id
            });
            const userFactory = user.map(item => UserFactory_1.UserFactory.getUser(item, type));
            return userFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async UpdateUserService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const currentUser = await this.GetDetailUserService(req);
            const filters = currentUser[0] || {};
            const newRequest = {
                ...currentUser[0],
                ...req.body
            };
            const updateUser = UserFactory_1.UserFactory.createUser(newRequest, req.query);
            const updateResult = await UserFactory_1.UserFactory.getSchema(type)
                .find(filters)
                .updateOne(updateUser)
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.AUTH.update, 200))
                .catch((err) => {
                logger_1.default.error(err);
                return function_1.default.getActionResult(define_1.default.RESULT.AUTH.update, 500);
            });
            return updateResult;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = AuthService;
