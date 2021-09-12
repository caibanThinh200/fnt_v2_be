"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const define_1 = __importDefault(require("../Constant/define"));
const GiftsSchema_1 = __importDefault(require("./GiftsSchema"));
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const vouchers = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    isPercent: {
        type: Boolean,
        required: true,
        default: false
    },
    value: {
        type: Number,
        required: true,
        default: 0
    },
    max_discount: {
        type: Number,
        default: 0
    },
    gifts: {
        type: [GiftsSchema_1.default],
        default: []
    },
    status: {
        type: String,
        default: define_1.default.STATUS.unactive
    },
    created_at_from: {
        type: Date,
        default: Date.now()
    },
    created_at_to: {
        type: Date,
        default: null
    },
    updated_at: {
        type: Date,
        default: null
    }
});
const VoucherSchema = mongoose_1.default.model("Vouchers", vouchers);
exports.default = VoucherSchema;
