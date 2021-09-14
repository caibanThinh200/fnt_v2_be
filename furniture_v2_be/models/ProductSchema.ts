import TAG_DEFINE from "../Constant/define";
import mongoose from "mongoose";
import GiftsSchema from './GiftsSchema';
const {Schema} = mongoose;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    // giftsList: {
    //     type: [GiftsSchema],
    //     default: []
    // },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive
    },
    type: {
        required: true,
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
})

const ProductSchema = mongoose.model(TAG_DEFINE.SCHEMA.PRODUCT, Product);
export default ProductSchema;