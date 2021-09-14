"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("../Constant/url"));
const Product_controller_1 = __importDefault(require("../Controller/Product.controller"));
const route = express_1.default.Router();
route.post(url_1.default.APP.start, Product_controller_1.default.AddProductController);
route.get(url_1.default.APP.start, Product_controller_1.default.GetListProductController);
exports.default = route;
