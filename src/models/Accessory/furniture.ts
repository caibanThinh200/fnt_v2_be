import { AccessoryBaseField } from "./baseField";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from "../../Constant/define";
import { AddTypeInAccessory } from "../../Middleware/productType.middleware";

const FurnitureFields = {
    ...AccessoryBaseField,
    code: {
        type: Number,
        require: true
    }
};

export const FurnitureAccessorySchema = new Schema(FurnitureFields, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});
export default mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.ACCESSORY,
        TAG_DEFINE.STORE.FURNITURE
    ),
    FurnitureAccessorySchema
);
