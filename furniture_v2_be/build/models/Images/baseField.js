"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    url: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "subThumb"
    },
    name: {
        type: String,
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
