"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserResponse_1 = require("../../../../Mapping/Response/UserResponse");
class AAPetModel extends UserResponse_1.UserModel {
    constructor(data) {
        super(data);
        this.setAAPetData(data);
    }
    setAAPetData(data) {
        this.setData(data);
    }
}
exports.default = AAPetModel;
