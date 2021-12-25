import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import  BillBaseField from './baseField';
import { ImageSchema } from '../Upload/furniture';
import CommonFunction from '../../Utils/function';
import {FurnitureProductSchema} from '../Product/furniture';
import { UserSchema } from '../User/furniture';


const FurnitureBillField = {
    ...BillBaseField,
    user: {
        type: UserSchema,
        require: true
    },
    products: {
        type: [FurnitureProductSchema],
        require: true
    }
}

export const BillSchema = new Schema(FurnitureBillField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.BILL, TAG_DEFINE.STORE.FURNITURE), BillSchema);
export default CategoryModel;