"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const define_1 = __importDefault(require("../Constant/define"));
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const GiftsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    giftsList: [],
    status: {
        type: String,
        default: define_1.default.STATUS.unactive,
    },
    created_at_from: {
        type: Date,
        default: Date.now(),
    },
    created_at_to: {
        type: Date,
        default: null,
    },
    updated_at: {
        type: Date,
        default: null,
    },
});
const Gifts = mongoose_1.default.model(define_1.default.SCHEMA.GIFT, GiftsSchema);
exports.default = Gifts;
