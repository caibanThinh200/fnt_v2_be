"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductSchema_1 = __importDefault(require("../models/ProductSchema"));
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const factory_1 = require("../Factory/factory");
class ProductService {
    static async AddProductService(req) {
        try {
            const productFactory = factory_1.ProductFactory.createProduct(req.body, req.body.type);
            const product = new ProductSchema_1.default(productFactory);
            const result = await product.save()
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.create, 200))
                .catch(e => {
                logger_1.default.error(e);
                return function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.create, 500);
            });
            return result;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetListProductService(req) {
        try {
            const { type } = req.query;
            const product = await ProductSchema_1.default.find({ type });
            const productFactory = product.map(item => factory_1.ProductFactory.getProduct(item, type));
            return productFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = ProductService;
