"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BillRequest_1 = require("../../../../Mapping/Request/BillRequest");
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
class FurnitureRequest extends BillRequest_1.BillRequest {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.user = new user_1.default(data.user || {}) || "";
        this.products = data.products.map(item => new product_1.default(item)) || [];
    }
}
exports.default = FurnitureRequest;
