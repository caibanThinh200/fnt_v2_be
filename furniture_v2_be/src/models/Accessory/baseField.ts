export const AccessoryBaseField = {
    name: {
        type: String,
        require: true,
    },
    unit: {
        type: String
    },
    types: {
        type: [Number],
        default: []
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: Date
}