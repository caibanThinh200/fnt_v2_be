"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("../Constant/url"));
const Bill_controller_1 = __importDefault(require("../Controller/Bill.controller"));
const route = express_1.default.Router();
route.post(url_1.default.APP.start, Bill_controller_1.default.AddBillController);
route.get(url_1.default.APP.start, Bill_controller_1.default.GetListBillController);
route.get(url_1.default.APP.params.replace("params", "id"), Bill_controller_1.default.GetDetailBillController);
exports.default = route;
