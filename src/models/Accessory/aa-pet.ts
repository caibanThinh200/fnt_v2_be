import { AccessoryBaseField } from "./baseField";
import { Schema } from "mongoose";
import mongoose from "mongoose";
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from "../../Constant/define";
import { AddTypeInAccessory } from "../../Middleware/productType.middleware";

const AAPetFields = {
    ...AccessoryBaseField,
    types: {
        type: [
            {
                _id: mongoose.Schema.Types.ObjectId,
                name: String,
            },
        ],
        default: [],
    },
};

export const AAPetAccessorySchema = new Schema(AAPetFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
export default mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.ACCESSORY,
        TAG_DEFINE.STORE.AA_PET
    ),
    AAPetAccessorySchema
);
