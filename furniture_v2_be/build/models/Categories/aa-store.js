"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose_1 = require("mongoose");
const define_1 = __importDefault(require("../../Constant/define"));
const baseField_1 = __importDefault(require("./baseField"));
const function_1 = __importDefault(require("../../Utils/function"));
const AACategoryField = {
    ...baseField_1.default,
    code: {
        require: true,
        type: String
    },
    // image: {
    //     type: ImageSchema
    // }
};
exports.CategorySchema = new mongoose_1.Schema(AACategoryField);
const CategoryModel = (0, mongoose_1.model)(function_1.default.getStoreSchema(define_1.default.SCHEMA.CATEGORY, define_1.default.STORE.AA_PET), exports.CategorySchema);
exports.default = CategoryModel;
