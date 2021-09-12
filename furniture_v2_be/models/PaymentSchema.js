"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var define_1 = __importDefault(require("../Constant/define"));
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var payments = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: define_1.default.SERVICE.PAYMENT.cash
    },
    code: {
        type: String,
        default: define_1.default.CODE.PAYMENT.cash
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
var PaymentSchema = mongoose_1.default.model(define_1.default.SCHEMA.PAYMENT, payments);
exports.default = PaymentSchema;
