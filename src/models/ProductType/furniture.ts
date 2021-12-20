import { model, Schema, Types } from "mongoose";
import TAG_DEFINE from '../../Constant/define';
import CommonFunction from "../../Utils/function";
import { ProductTypeBaseField } from "./basefield";
import { AddTypeInAccessory } from '../../Middleware/productType.middleware';

const FurnitureBaseField = {
    ...ProductTypeBaseField,
    attribute: {
        type: [Schema.Types.ObjectId],
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.ACCESSORY, TAG_DEFINE.STORE.FURNITURE)
    },
    type: {
        type: Number,
        required: true,
        unique: true
    }
}

export const FurnitureProductTypeSchema = new Schema(FurnitureBaseField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

FurnitureProductTypeSchema.post("save", doc => AddTypeInAccessory(doc, TAG_DEFINE.STORE.FURNITURE));

const FurnitureProductTypeModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT_TYPE, TAG_DEFINE.STORE.FURNITURE), FurnitureProductTypeSchema);
export default FurnitureProductTypeModel;