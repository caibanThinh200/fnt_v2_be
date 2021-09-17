import PaymentSchema from "./PaymentSchema";
import VoucherSchema from "./VoucherSchema";
import TAG_DEFINE from "../Constant/define";
import mongoose from "mongoose";

const {Schema} = mongoose;

const User = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
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
        required: true,
        unique: true
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
        type: Array,
        default: []
    },
    paymentList: {
        type: Array,
        default: []
    },
    bills: {
        type: [],
        default: []
    }
})

const UserSchema = mongoose.model(TAG_DEFINE.SCHEMA.USER, User, 'user');
export default UserSchema;