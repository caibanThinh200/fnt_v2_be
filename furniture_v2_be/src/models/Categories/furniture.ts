import { Schema, model, Types } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import  CategoryBaseField from './baseField';
import { ImageSchema } from '../Upload/furniture';
import CommonFunction from '../../Utils/function';
import tree from "mongoose-data-tree";
import mongoose from 'mongoose';

const FurnitureCategoryField = {
    ...CategoryBaseField,
    _id: String,
    code: {
        require: true,
        type: String
    },
    childCate: {
        type: []
    },
    name: {
        type: String,
        unique: false
    },
    products: {
        type: [String],
        ref: "furniture products"
    }
    // image: {
    //     type: ImageSchema
    // }
}

export const CategorySchema = new Schema({...FurnitureCategoryField});
CategorySchema.add({
    childCate: {type: [new Schema(FurnitureCategoryField)], default: []}
})

CategorySchema.plugin(tree);
const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.FURNITURE), CategorySchema);
export default CategoryModel;