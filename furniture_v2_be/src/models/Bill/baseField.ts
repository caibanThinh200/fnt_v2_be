export default {
    bill_info: {
        type: Array,
        required: true,
        default: []
    },
    total_cost: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
}