import baseField from "./baseField";
import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import { ProductField } from "../Product/aa-pet";

const schema = new mongoose.Schema(
    {
        ...baseField,
        orderId: {
            type: String,
            ref: CommonFunction.getStoreSchema(
                TAG_DEFINE.SCHEMA.ORDER,
                TAG_DEFINE.STORE.AA_PET
            ),
        },
        products: {
            type: [
                {
                    _id: false,
                    product: ProductField,
                    quantity: Number,
                },
            ],
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
