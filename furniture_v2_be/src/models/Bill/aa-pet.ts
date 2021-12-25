import baseField from "./baseField";
import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";

const Product = {
    _id: false,
    product_id: {
        type: String,
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.AA_PET)
    },
    count: {
        type: Number,
        default: 1
    }
}

const schema = new mongoose.Schema(
    {
        ...baseField,
        user_id: {
            type: String,
            ref: CommonFunction.getStoreSchema(
                TAG_DEFINE.SCHEMA.USER,
                TAG_DEFINE.STORE.AA_PET
            ),
            required: true,
        },
        products: {
            type: [Product],
            required: true,
        },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Bill = mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.BILL,
        TAG_DEFINE.STORE.AA_PET
    ),
    schema
);

export default Bill;
