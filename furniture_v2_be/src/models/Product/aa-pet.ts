import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductBaseField} from './baseField'

const ProductSchema = new mongoose.Schema({
    ...ProductBaseField,
    category_detail_id: {
        type: String,
        required: true,
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY_DETAIL, TAG_DEFINE.STORE.AA_PET)
    },
    images: {
        type: Array,
        default: []
    }
});

const Product = mongoose.model(
    CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
    ProductSchema
);

export default Product;
