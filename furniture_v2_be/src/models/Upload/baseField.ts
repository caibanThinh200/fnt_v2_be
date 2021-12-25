export default {
    url: {
        type: String,
        required: true
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
}