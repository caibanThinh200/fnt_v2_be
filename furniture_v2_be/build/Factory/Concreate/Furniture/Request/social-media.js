"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocialMedia_1 = require("../../../../Mapping/Request/SocialMedia");
class FurnitureRequest extends SocialMedia_1.SocialMediaRequest {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
    }
}
exports.default = FurnitureRequest;
