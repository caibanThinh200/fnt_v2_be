"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryResponse_1 = require("../../../../Mapping/Response/CategoryResponse");
class AAStoreRequest extends CategoryResponse_1.CategoryResponse {
    constructor(data) {
        super(data);
        this.setAAStoreData(data);
    }
    setAAStoreData(data) {
        this.setData(data);
    }
}
exports.default = AAStoreRequest;
