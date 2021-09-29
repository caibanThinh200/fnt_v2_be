"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBaseField = void 0;
exports.ProductBaseField = {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 100,
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
    },
    saled_count: {
        type: Number,
        default: 0,
    },
    discount_percent: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 0,
    },
    madeIn: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: null,
    },
};
