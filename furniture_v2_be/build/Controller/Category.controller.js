"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_service_1 = __importDefault(require("../Service/Category.service"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
class CategoryController {
    static async AddCategoryController(req, res) {
        try {
            const result = await Category_service_1.default.AddCategoryService(req);
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.create, 500)
                }
            });
        }
    }
    static async GetListCategoryController(req, res) {
        try {
            const result = await Category_service_1.default.GetListCategoryService(req);
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.getList, 500)
                }
            });
        }
    }
    static async GetDetailCategoryController(req, res) {
        try {
            const result = await Category_service_1.default.GetDetailCategoryService(req);
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.getDetail, 500)
                }
            });
        }
    }
    static async UpdateCategoryController(req, res) {
        try {
            const result = await Category_service_1.default.UpdateCategoryService(req);
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.update, 500)
                }
            });
        }
    }
}
exports.default = CategoryController;
