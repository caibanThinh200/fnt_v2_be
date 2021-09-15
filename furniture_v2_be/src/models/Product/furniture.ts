import CategorySchema from "../Categories/index";
import ImageSchema from '../Images/index';
import { ProductBaseField } from '../../Mapping/Request/ProductRequest';
import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import CommonFunction from "../../Utils/function";

const FurnitureFields = {
    ...ProductBaseField,
    size: {
        type: String,
        require: true
    },
    productWeight: {
        type: Number,
        require: true
    },
    maxWeight: {
        type: Number,
        require: true,
    },
    feature: {
        type: String,
    },
    // images: {
    //     type: [ImageSchema]
    // },
    categories: {
        type: String,

    }
}

const schema = new Schema(FurnitureFields);
const FurnitureSchema = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, "furniture"), schema)

export default FurnitureSchema;