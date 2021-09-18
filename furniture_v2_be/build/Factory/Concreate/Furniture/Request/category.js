"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRequest_1 = require("../../../../Mapping/Request/CategoryRequest");
class FurnitureRequest extends CategoryRequest_1.CategoryRequest {
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
