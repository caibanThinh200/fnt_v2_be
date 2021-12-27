export const AccessoryBaseField = {
    name: {
        type: String,
        require: true,
    },
    unit: {
        type: String,
    },
    types: {
        type: [Number],
        default: [],
    },
    field: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: Date,
};
