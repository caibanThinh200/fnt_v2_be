export default {
    url: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "2"
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