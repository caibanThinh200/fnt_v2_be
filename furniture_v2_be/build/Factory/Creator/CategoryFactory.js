"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactory = void 0;
const category_1 = __importDefault(require("../Concreate/Furniture/Request/category"));
const category_2 = __importDefault(require("../Concreate/Furniture/Response/category"));
const furniture_1 = __importDefault(require("../../models/Categories/furniture"));
// AA-store
const category_3 = __importDefault(require("../Concreate/AA-PET/Request/category"));
const category_4 = __importDefault(require("../Concreate/AA-PET/Response/category"));
const aa_store_1 = __importDefault(require("../../models/Categories/aa-store"));
const define_1 = __importDefault(require("../../Constant/define"));
class CategoryFactory {
    static createCategory(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new category_1.default(data);
            case define_1.default.STORE.AA_PET:
                return new category_3.default(data);
            default:
                return new category_1.default(data);
        }
    }
    static getCategory(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new category_2.default(data);
            case define_1.default.STORE.AA_PET:
                return new category_4.default(data);
            default:
                return new category_2.default(data);
        }
    }
    static createSchema(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new furniture_1.default(data);
            case define_1.default.STORE.AA_PET:
                return new aa_store_1.default(data);
            default:
                return new furniture_1.default(data);
        }
    }
    static getSchema(type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return furniture_1.default;
            case define_1.default.STORE.AA_PET:
                return aa_store_1.default;
            default:
                return furniture_1.default;
        }
    }
}
exports.CategoryFactory = CategoryFactory;
