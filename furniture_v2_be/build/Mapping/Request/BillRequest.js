"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillRequest = void 0;
class BillRequest {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this.total = (data.products || []).reduce((i, k) => i + k.price, 0) || 0;
        this.created_at = data.created_at || Date.now();
    }
}
exports.BillRequest = BillRequest;
