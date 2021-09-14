"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
class ProductModel {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id.toString() || "";
        this.name = data.name || "";
        this.type = data.type || "";
        this.price = data.price || 0;
    }
}
exports.ProductModel = ProductModel;
