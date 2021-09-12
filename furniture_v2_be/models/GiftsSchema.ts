import TAG_DEFINE from "../Constant/define";
import mongoose from "mongoose";
const {Schema} = mongoose;

const Gifts = new Schema({
    name: {
        type: String,
        required: true
    },
    giftsList: [],
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive
    },
    created_at_from: {
        type: Date,
        default: Date.now()
    },
    created_at_to: {
        type: Date,
        default: null
    },
    updated_at: {
        type: Date,
        default: null
    }
})

const GiftsSchema = mongoose.model(TAG_DEFINE.SCHEMA.GIFT, Gifts);
export default GiftsSchema;