"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureProductSchema = void 0;
const baseField_1 = require("./baseField");
const mongoose_1 = require("mongoose");
const define_1 = __importDefault(require("../../Constant/define"));
const function_1 = __importDefault(require("../../Utils/function"));
const FurnitureFields = {
    ...baseField_1.ProductBaseField,
    size: {
        type: String,
        require: true
    },
    productWeight: {
        type: Number,
        require: true
    },
    maxWeight: {
        type: Number,
        require: true,
    },
    feature: {
        type: String,
    },
    // images: {
    //     type: [ImageSchema]
    // },
    // categories: {
    //     type: [CategorySchema]
    // }
};
exports.FurnitureProductSchema = new mongoose_1.Schema(FurnitureFields);
const FurnitureModel = (0, mongoose_1.model)(function_1.default.getStoreSchema(define_1.default.SCHEMA.PRODUCT, define_1.default.STORE.FURNITURE), exports.FurnitureProductSchema);
exports.default = FurnitureModel;
