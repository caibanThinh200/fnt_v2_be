"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRequest_1 = __importDefault(require("../../../../Mapping/Request/ProductRequest"));
class FurnitureRequest extends ProductRequest_1.default {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.size = data.size || "";
        this.productWeight = data.productWeight || 0;
        this.maxWeight = data.maxWeight || 0;
        this.feature = data.feature || "";
        this.images = data.images || null;
        this.categories = data.categories || "";
    }
}
exports.default = FurnitureRequest;
