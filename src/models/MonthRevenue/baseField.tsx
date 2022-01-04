const RevenueBaseField = {
    month: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
    },
    total: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date
    }
}

export default RevenueBaseField;