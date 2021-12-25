import SocialMediaBaseField from "./baseField";
import { model, Schema } from 'mongoose';
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from '../../Constant/define';
const AAStoreFields = {
    ...SocialMediaBaseField,
}

export const SocialMediaSchema = new Schema(AAStoreFields, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
const AAStoreSocailMediaModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.SOCIAL_MEDIA, TAG_DEFINE.STORE.AA_PET), SocialMediaSchema);
export default AAStoreSocailMediaModel;