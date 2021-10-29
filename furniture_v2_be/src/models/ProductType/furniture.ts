import { model, Schema } from "mongoose";
import TAG_DEFINE from '../../Constant/define';
import CommonFunction from "../../Utils/function";
import { ProductTypeBaseField } from "./basefield";
import { FurnitureAcessorySchema } from '../Accessory/furniture';

const FurnitureBaseField = {
    ...ProductTypeBaseField,
    attribute: {
        type: [FurnitureAcessorySchema]
    },
    type: {
        type: Number,
        required: true,
        unique: true
    }
}

export const FurnitureProductTypeSchema = new Schema(FurnitureBaseField);
const FurnitureProductTypeModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT_TYPE, TAG_DEFINE.STORE.FURNITURE), FurnitureProductTypeSchema);
export default FurnitureProductTypeModel;