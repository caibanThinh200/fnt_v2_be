import mongoose from "mongoose";

export const ProductBaseField = {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
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
    discount_value: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
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
