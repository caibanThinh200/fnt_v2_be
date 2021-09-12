"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var define_1 = __importDefault(require("../Constant/define"));
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var Product = new Schema({
    name: {
        type: String,
        required: true
    },
    giftsList: [],
    status: {
        type: String,
        default: define_1.default.STATUS.unactive
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
});
var ProductSchema = mongoose_1.default.model(define_1.default.SCHEMA.PRODUCT, Product);
exports.default = ProductSchema;
