import PaymentSchema from "./PaymentSchema";
import VoucherSchema from "./VoucherSchema";
import TAG_DEFINE from "../Constant/define";
import mongoose from "mongoose";

const {Schema} = mongoose;

const User = new Schema({
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    social: {
        type: String,
        default: TAG_DEFINE.SERVICE.SOCIAL.web
    },
    point: {
        type: Number,
        default: 0
    },
    vouchers: {
        type: [VoucherSchema],
        default: []
    },
    paymentList: {
        type: [PaymentSchema],
        default: []
    },
    bills: {

    }
})

const UserSchema = mongoose.model(TAG_DEFINE.SCHEMA.USER, User);
export default UserSchema;