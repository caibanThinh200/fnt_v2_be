"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillSchema = void 0;
const mongoose_1 = require("mongoose");
const define_1 = __importDefault(require("../../Constant/define"));
const baseField_1 = __importDefault(require("./baseField"));
const function_1 = __importDefault(require("../../Utils/function"));
const furniture_1 = require("../Product/furniture");
const furniture_2 = require("../User/furniture");
const FurnitureBillField = {
    ...baseField_1.default,
    user: {
        type: furniture_2.UserSchema,
        require: true
    },
    products: {
        type: [furniture_1.FurnitureProductSchema],
        require: true
    }
};
exports.BillSchema = new mongoose_1.Schema(FurnitureBillField);
const CategoryModel = (0, mongoose_1.model)(function_1.default.getStoreSchema(define_1.default.SCHEMA.BILL, define_1.default.STORE.FURNITURE), exports.BillSchema);
exports.default = CategoryModel;
