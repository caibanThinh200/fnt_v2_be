"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRequest_1 = __importDefault(require("../../../../Mapping/Request/ProductRequest"));
class AAPetModel extends ProductRequest_1.default {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.category_id = data.category_id || "";
    }
}
exports.default = AAPetModel;
