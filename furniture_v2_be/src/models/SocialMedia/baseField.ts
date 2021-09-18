export default {
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    thumb: {
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