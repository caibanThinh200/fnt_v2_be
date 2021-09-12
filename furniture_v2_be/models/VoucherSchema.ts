const TAG_DEFINE = require("../Constant/define")
const GiftsSchema = require("./GiftsSchema")

const mongoose = require("mongoose"),
{Schema} = mongoose

const vouchers = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    isPercent: {
        type: Boolean,
        required: true,
        default: false
    },
    value: {
        type: Number,
        required: true,
        default: 0
    },
    max_discount: {
        type: Number,
        default: 0
    },
    gifts: {
        type: [GiftsSchema],
        default: []
    },
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive
    },
    created_at_from: {
        type: Date,
        default: Date.now()
    },
    created_at_to: {
        type: Date,
        default: null
    },
    updated_at: {
        type: Date,
        default: null
    }
})

const VoucherSchema = mongoose.model("Vouchers", vouchers);
export default VoucherSchema;