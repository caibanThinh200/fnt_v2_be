"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductResponse {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id.toString() || "";
        this.name = data.name || "";
        this.description = data.description || "";
        this.quantity = data.quantity || 0;
        this.saled_count = data.saled_count || 0;
        this.discount_percent = data.discount_percent || 0;
        this.price = data.price || 0;
        this.status = data.status || 0;
        this.created_at = data.created_at || new Date();
        this.updated_at = data.updated_at || null;
    }
}
exports.default = ProductResponse;
