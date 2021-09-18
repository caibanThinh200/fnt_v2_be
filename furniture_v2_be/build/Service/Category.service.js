"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../config/logger"));
const define_1 = __importDefault(require("../Constant/define"));
const function_1 = __importDefault(require("../Utils/function"));
const CategoryFactory_1 = require("../Factory/Creator/CategoryFactory");
class CategoryService {
    static async AddCategoryService(req) {
        try {
            const categoryFactory = CategoryFactory_1.CategoryFactory.createCategory(req.body, req.headers.type);
            const category = CategoryFactory_1.CategoryFactory.createSchema(categoryFactory, req.headers.type);
            const result = await category.save()
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.create, 200))
                .catch(e => {
                logger_1.default.error(e);
                return function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.create, 500);
            });
            return result;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetListCategoryService(req) {
        try {
            const type = req.headers.type;
            const category = await CategoryFactory_1.CategoryFactory.getSchema(type).find({ type });
            const categoryFactory = category.map(item => CategoryFactory_1.CategoryFactory.getCategory(item, type));
            return categoryFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async GetDetailCategoryService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const category = await CategoryFactory_1.CategoryFactory.getSchema(type).find({
                type,
                _id: id
            });
            const categoryFactory = category.map(item => CategoryFactory_1.CategoryFactory.getCategory(item, type));
            return categoryFactory;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
    static async UpdateCategoryService(req) {
        try {
            const { type } = req.query || "";
            const { id } = req.params || "";
            const currentcategory = await this.GetDetailCategoryService(req);
            const filters = currentcategory[0] || {};
            const newRequest = {
                ...currentcategory[0],
                ...req.body
            };
            const updatecategory = CategoryFactory_1.CategoryFactory.createCategory(newRequest, req.query);
            const updateResult = await CategoryFactory_1.CategoryFactory.getSchema(type)
                .find(filters)
                .updateOne(updatecategory)
                .then(() => function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.update, 200))
                .catch((err) => {
                logger_1.default.error(err);
                return function_1.default.getActionResult(define_1.default.RESULT.CATEGORY.update, 500);
            });
            return updateResult;
        }
        catch (e) {
            logger_1.default.error(e);
        }
    }
}
exports.default = CategoryService;
