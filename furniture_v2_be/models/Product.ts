import TAG_DEFINE from "../Constant/define";

const mongoose = require("mongoose"),
{Schema} = mongoose;

const Product = new Schema({
    name: {
        type: String,
        required: true
    },
    giftsList: [],
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive 
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