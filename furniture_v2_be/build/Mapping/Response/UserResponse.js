"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
class UserModel {
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this._id = data._id || "";
        this.name = data.name || "";
        this.email = data.email || "";
        this.username = data.username || "";
        this.password = data.password || "";
        this.address = data.address || "";
        this.phone = data.phone || "";
        this.gender = data.gender || "Male";
    }
}
exports.UserModel = UserModel;
