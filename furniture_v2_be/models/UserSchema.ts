const PaymentSchema = require("./PaymentSchema");
const VoucherSchema = require("./VoucherSchema");

const TAG_DEFINE = require("../Constant/define"),
mongoose = require("mongoose"),
{Schema} = mongoose;

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

const UserSchema = mongoose.model(TAG_DEFINE.default.SCHEMA.USER, User);
export default UserSchema;