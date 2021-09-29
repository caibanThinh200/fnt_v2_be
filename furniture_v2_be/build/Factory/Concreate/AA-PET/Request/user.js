"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRequest_1 = require("../../../../Mapping/Request/UserRequest");
class AAPetModel extends UserRequest_1.UserModel {
    constructor(data) {
        super(data);
        this.setAAPetData(data);
    }
    setAAPetData(data) {
        this.setData(data);
    }
}
exports.default = AAPetModel;
