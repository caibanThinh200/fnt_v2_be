"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../Service/ProductService"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
class ProductController {
    static async AddProductController(req, res) {
        try {
            const result = await ProductService_1.default.AddProductService(req);
            res.status(400).json({
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.create, 500)
                }
            });
        }
    }
    static async GetListProductController(req, res) {
        try {
            const result = await ProductService_1.default.GetListProductService(req);
            res.status(400).json({
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
                    mesage: function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.getList, 500)
                }
            });
        }
    }
}
exports.default = ProductController;
