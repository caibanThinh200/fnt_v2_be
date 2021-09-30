"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillResponse = void 0;
class BillResponse {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id.toString() || "";
        this.total = data.total || "";
        this.created_at = data.created_at || Date.now();
    }
}
exports.BillResponse = BillResponse;
