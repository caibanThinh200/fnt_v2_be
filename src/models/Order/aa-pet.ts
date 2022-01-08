import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import { ProductDocument, ProductField } from "../Product/aa-pet";
import baseField from "./baseField";

const OrderSchema = new mongoose.Schema({
    ...baseField,
    userId: {
        type: String,
        ref: CommonFunction.getStoreSchema(
            TAG_DEFINE.SCHEMA.USER,
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
    delivery: {
        type: {
            _id: false,
            name: String,
            phone: String,
            address: String,
            status: {
                type: String,
                default: "pending",
            },
        },
    },
    payment: {
        type: {
            _id: false,
            status: Boolean,
            method: String,
        },
        default: {
            status: false,
            method: "cash",
        },
    },
    haveInBill: {
        type: Boolean,
        default: false,
    },
});

const Order = mongoose.model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.ORDER,
        TAG_DEFINE.STORE.AA_PET
    ),
    OrderSchema
);

export default Order;
