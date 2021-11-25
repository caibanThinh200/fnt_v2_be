import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductBaseField} from './baseField'

export const ProductField = {
    ...ProductBaseField,
    category_detail_id: {
        type: String,
        required: true,
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.CATEGORY_DETAIL,
            TAG_DEFINE.STORE.AA_PET
        ),
    },
    images: {
        type: Array,
        default: [],
    },
};

const ProductSchema = new mongoose.Schema(ProductField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Product = mongoose.model(
    CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
    ProductSchema
);

export default Product;
