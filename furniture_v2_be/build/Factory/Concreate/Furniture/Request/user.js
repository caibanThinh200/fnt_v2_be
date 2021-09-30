"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRequest_1 = require("../../../../Mapping/Request/UserRequest");
class FurnitureModel extends UserRequest_1.UserModel {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
    }
}
exports.default = FurnitureModel;
