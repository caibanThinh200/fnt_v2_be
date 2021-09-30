"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocialMedia_1 = require("../../../../Mapping/Response/SocialMedia");
class FurnitureResponse extends SocialMedia_1.SocialMediaResponse {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
    }
}
exports.default = FurnitureResponse;
