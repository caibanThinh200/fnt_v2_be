"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this.name = data.name || "";
        this.email = data.email || "";
        this.username = data.username || "";
        this.password = data.password || "";
        this.address = data.address || "";
        this.phone = data.phone || "";
        this.gender = data.gender || "Male";
        this.created_at = data.created_at || Date.now();
        this.updated_at = data.updated_at || null;
    }
}
exports.UserModel = UserModel;
