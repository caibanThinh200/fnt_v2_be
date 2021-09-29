"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
// Furniture
const Request_1 = require("../Concreate/Furniture/Request/");
const Response_1 = require("../Concreate/Furniture/Response/");
const furniture_1 = __importDefault(require("../../models/Product/furniture"));
// AA-PET
const Request_2 = require("../Concreate/AA-PET/Request/");
const Response_2 = require("../Concreate/AA-PET/Response/");
const aa_pet_1 = __importDefault(require("../../models/Product/aa-pet"));
const define_1 = __importDefault(require("../../Constant/define"));
class ProductFactory {
    static createProduct(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE: return new Request_1.FurnitureProductRequest(data);
            case define_1.default.STORE.AA_PET: return new Request_2.AAPetProductRequest(data);
            default: return new Request_1.FurnitureProductRequest(data);
        }
    }
    static getProduct(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new Response_1.FurnitureProductResponse(data);
            case define_1.default.STORE.AA_PET:
                return new Response_2.AAPetProductResponse(data);
            default:
                return new Response_1.FurnitureProductResponse(data);
        }
    }
    static createSchema(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new furniture_1.default(data);
            case define_1.default.STORE.AA_PET:
                return new aa_pet_1.default(data);
            default:
                return new furniture_1.default(data);
        }
    }
    static getSchema(type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return furniture_1.default;
            case define_1.default.STORE.AA_PET:
                return aa_pet_1.default;
            default:
                return furniture_1.default;
        }
    }
}
exports.ProductFactory = ProductFactory;
