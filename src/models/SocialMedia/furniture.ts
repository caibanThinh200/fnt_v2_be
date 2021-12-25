import SocialMediaBaseField from "./baseField";
import { model, Schema } from 'mongoose';
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from '../../Constant/define';
const FurnitureFields = {
    ...SocialMediaBaseField,
}

export const SocialMediaSchema = new Schema(FurnitureFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
const FurnitureSocailMediaModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.SOCIAL_MEDIA, TAG_DEFINE.STORE.FURNITURE), SocialMediaSchema);
export default FurnitureSocailMediaModel;