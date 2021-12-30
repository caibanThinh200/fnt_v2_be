import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductBaseField} from './baseField'

export interface ProductDocument extends mongoose.Document{
    category_detail_id: string;
    images: Array<string>
    accessories: {}
    name: string,
    description: string,
    quantity: number,
    saled_count: number,
    discount_value: number,
    price: number,
    created_at: Date,
    updated_at: Date,
}

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
    accessories: {}
};

const ProductSchema = new mongoose.Schema(ProductField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const Product = mongoose.model(
    CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET),
    ProductSchema
);

export default Product;
