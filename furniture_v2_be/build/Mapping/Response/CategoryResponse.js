"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryResponse = void 0;
class CategoryResponse {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id.toString() || "";
        this.name = data.name || "";
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }
}
exports.CategoryResponse = CategoryResponse;
