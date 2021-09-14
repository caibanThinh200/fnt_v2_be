import TAG_DEFINE from "../../Constant/define";
import mongoose from "mongoose";
import GiftsSchema from '../GiftsSchema';
import FurnitureSchema from './furniture';
const {Schema} = mongoose;

let childProduct = {
    ...FurnitureSchema
};

let BaseProduct = {
    ...childProduct,
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
    },
};
const Product = new Schema(BaseProduct);
const ProductSchema = mongoose.model(TAG_DEFINE.SCHEMA.PRODUCT, Product);
export default ProductSchema;
