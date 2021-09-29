"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductResponse_1 = __importDefault(require("../../../../Mapping/Response/ProductResponse"));
class AAPetModel extends ProductResponse_1.default {
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
