"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductResponse_1 = require("../../../../Mapping/Response/ProductResponse");
class FurnitureModel extends ProductResponse_1.ProductModel {
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
