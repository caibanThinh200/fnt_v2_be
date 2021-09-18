"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductResponse_1 = __importDefault(require("../../../../Mapping/Response/ProductResponse"));
class FurnitureResponse extends ProductResponse_1.default {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.size = data.size || "";
        this.productWeight = data.productWeight || "";
        this.maxWeight = data.maxWeight || "";
        this.feature = data.feature || "";
        this.images = data.images || "";
        this.categories = data.categories || "";
    }
}
exports.default = FurnitureResponse;
