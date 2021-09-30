"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const define_1 = __importDefault(require("../../Constant/define"));
const function_1 = __importDefault(require("../../Utils/function"));
const baseField_1 = require("./baseField");
const ProductSchema = new mongoose_1.default.Schema({
    ...baseField_1.ProductBaseField,
    category_id: {
        type: String,
        required: true,
        ref: "Categories"
    }
});
const Product = mongoose_1.default.model(function_1.default.getStoreSchema(define_1.default.SCHEMA.PRODUCT, define_1.default.STORE.AA_PET), ProductSchema);
exports.default = Product;
