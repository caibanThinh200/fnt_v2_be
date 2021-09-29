import mongoose from 'mongoose';
export default {
    name: {
        type: String,
        required: true,
        unique: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
};