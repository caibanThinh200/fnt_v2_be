"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductRequest_1 = require("../../../../Mapping/Request/ProductRequest");
class FurnitureModel extends ProductRequest_1.ProductModel {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.colors = data.colors || "";
    }
}
exports.default = FurnitureModel;
