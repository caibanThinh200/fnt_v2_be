export const ProductBaseField = {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        maxLength: 100,
        default: ''
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
