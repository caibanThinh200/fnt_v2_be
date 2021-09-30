import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import baseField from "./baseField";

const CategoryDetailSchema = new mongoose.Schema({
    ...baseField,

    category_id: {
        type: String,
        required: true,
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.AA_PET),
    },
});

const CategoryDetail = mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.CATEGORY_DETAIL,
        TAG_DEFINE.STORE.AA_PET
    ),
    CategoryDetailSchema
);

export default CategoryDetail;
