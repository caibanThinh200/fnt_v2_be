export default {
    name: {
        type: String,
        require: true,
    },
    types: {
        type: [Number],
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
}