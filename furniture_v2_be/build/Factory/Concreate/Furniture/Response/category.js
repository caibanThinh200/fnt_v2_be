"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryResponse_1 = require("../../../../Mapping/Response/CategoryResponse");
class FurnitureRequest extends CategoryResponse_1.CategoryResponse {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.code = data.code || "";
        this.image = data.image || "";
    }
}
exports.default = FurnitureRequest;
