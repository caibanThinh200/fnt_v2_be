"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = require("../../../Mapping/Request/ProductModel");
const logger_1 = __importDefault(require("../../../config/logger"));
class FurnitureModel extends ProductModel_1.ProductModel {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        logger_1.default.warn(data);
        this.setData(data);
        this.colors = data.colors || "";
    }
}
exports.default = FurnitureModel;
