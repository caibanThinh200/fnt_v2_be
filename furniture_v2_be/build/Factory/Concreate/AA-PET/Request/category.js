"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRequest_1 = require("../../../../Mapping/Request/CategoryRequest");
class AAStoreRequest extends CategoryRequest_1.CategoryRequest {
    constructor(data) {
        super(data);
        this.setAAStoreData(data);
    }
    setAAStoreData(data) {
        this.setData(data);
    }
}
exports.default = AAStoreRequest;
