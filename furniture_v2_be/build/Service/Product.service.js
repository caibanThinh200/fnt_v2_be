"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const ProductFactory_1 = require("../Factory/Creator/ProductFactory");
class ProductService {
    static async AddProductService(req) {
        try {
            const productFactory = ProductFactory_1.ProductFactory.createProduct(req.body, req.headers.type);
            const product = ProductFactory_1.ProductFactory.createSchema(productFactory, req.headers.type);
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
            const type = req.headers.type;
            const product = await ProductFactory_1.ProductFactory.getSchema(type).find({ type });
            const productFactory = product.map(item => ProductFactory_1.ProductFactory.getProduct(item, type));
            return productFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetDetailProductService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const product = await ProductFactory_1.ProductFactory.getSchema(type).find({
                type,
                _id: id
            });
            const productFactory = product.map(item => ProductFactory_1.ProductFactory.getProduct(item, type));
            return productFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async UpdateProductService(req) {
        try {
            const { type } = req.query || "";
            const currentProduct = await this.GetDetailProductService(req);
            const filters = currentProduct[0] || {};
            const newRequest = {
                ...currentProduct[0],
                ...req.body
            };
            const updateProduct = ProductFactory_1.ProductFactory.createProduct(newRequest, req.query);
            const updateResult = await ProductFactory_1.ProductFactory.getSchema(type)
                .find(filters)
                .updateOne(updateProduct)
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.update, 200))
                .catch((err) => {
                logger_1.default.error(err);
                return function_1.default.getActionResult(define_1.default.RESULT.PRODUCT.update, 500);
            });
            return updateResult;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = ProductService;
