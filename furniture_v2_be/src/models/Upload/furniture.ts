import { Schema, model } from "mongoose";
import TAG_DEFINE from '../../Constant/define';
import ImageBaseField  from "./baseField";

const FurnitureImageField = {
    ...ImageBaseField
}

export const ImageSchema = new Schema(FurnitureImageField);

const ImageModel = model(TAG_DEFINE.SCHEMA.IMAGE, ImageSchema);
export default ImageModel;