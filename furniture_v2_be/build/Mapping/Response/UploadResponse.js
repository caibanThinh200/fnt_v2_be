"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadRequest = void 0;
class UploadRequest {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id.toString() || "";
        this.url = data.url || "";
        this.name = data.name || "";
        this.role = data.role || "";
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }
}
exports.UploadRequest = UploadRequest;
