"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("../Constant/url"));
const Category_controller_1 = __importDefault(require("../Controller/Category.controller"));
const route = express_1.default.Router();
route.post(url_1.default.APP.start, Category_controller_1.default.AddCategoryController);
route.get(url_1.default.APP.start, Category_controller_1.default.GetListCategoryController);
route.get(url_1.default.APP.params.replace("params", "id"), Category_controller_1.default.GetDetailCategoryController);
route.put(url_1.default.APP.params.replace("params", "id"), Category_controller_1.default.UpdateCategoryController);
exports.default = route;
