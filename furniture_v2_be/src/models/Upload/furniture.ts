import { Schema, model } from "mongoose";
import TAG_DEFINE from '../../Constant/define';
import ImageBaseField  from "./baseField";

const FurnitureImageField = {
    ...ImageBaseField
}

export const ImageSchema = new Schema(FurnitureImageField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const ImageModel = model(TAG_DEFINE.SCHEMA.IMAGE, ImageSchema);
export default ImageModel;