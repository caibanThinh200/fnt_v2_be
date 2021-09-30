"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BillResponse_1 = require("../../../../Mapping/Response/BillResponse");
class FurnitureResponse extends BillResponse_1.BillResponse {
    constructor(data) {
        super(data);
        this.setFurnitureData(data);
    }
    setFurnitureData(data) {
        this.setData(data);
        this.user = data.user || "";
        this.products = data.products || "";
    }
}
exports.default = FurnitureResponse;
