import { Schema, model } from "mongoose";
import TAG_DEFINE from '../../Constant/define';

const BaseFieldImages = new Schema({
    url: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "subThumb"
    },
    name: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
});

const ImageSchema = model(TAG_DEFINE.SCHEMA.IMAGE, BaseFieldImages);
export default ImageSchema;