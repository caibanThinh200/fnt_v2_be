import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductBaseField} from './baseField'

const ProductSchema = new mongoose.Schema({
    ...ProductBaseField,
    category_id: {
        type: String,
        required: true,
        ref: "Categories"
    }
});

const Product = mongoose.model(
    CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
    ProductSchema
);

export default Product;
