import {CategorySchema} from "../Categories/furniture";
import ImageModel, {ImageSchema} from '../Upload/furniture';
import { ProductBaseField } from './baseField';
import mongoose, { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import CommonFunction from "../../Utils/function";

export interface ProductDocument extends mongoose.Document{
    images: Array<string>
    accessories: {}
    name: string,
    description: string,
    quantity: number,
    saled_count: number,
    discount_value: number,
    price: number,
    code: number;
    type: string;
    status: number;
    mainThumb: [];
    subThumb: [];
    created_at: Date,
    updated_at: Date,
}

export const FurnitureFields = {
    ...ProductBaseField,
    code: {
        type: Number,
        require: true  
    },
    type: {
        type: String,
        require: true
    },
    is_percent: Boolean,
    discount_price: Number,
    status: {
        type: String,
        default: 0,
    },
    accessories: {},
    // categories: {
    //     type: [Schema.Types.ObjectId],
    //     default: [],
    //     ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.FURNITURE)
    // },
    subThumb: [ImageSchema],
    mainThumb: [ImageSchema]
    // categories: {
    //     type: [CategorySchema]
    // }
};

export const FurnitureProductSchema = new Schema(FurnitureFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
const FurnitureModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.FURNITURE), FurnitureProductSchema)

export default FurnitureModel;