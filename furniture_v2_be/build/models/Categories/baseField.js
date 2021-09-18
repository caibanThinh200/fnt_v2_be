"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
};
