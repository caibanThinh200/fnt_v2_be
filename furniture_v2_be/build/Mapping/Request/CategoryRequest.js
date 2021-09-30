"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRequest = void 0;
class CategoryRequest {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this.name = data.name || "";
        this.created_at = data.created_at || Date.now();
        this.updated_at = data.updated_at || null;
    }
}
exports.CategoryRequest = CategoryRequest;
