import { Product } from "../../Factory/interface";
import logger from "../../config/logger";
import TAG_DEFINE from "../../Constant/define";

export abstract class ProductModel implements Product {
    private _id: any;
    private name: any;
    private price: any;
    private type: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        // this._id = data._id || "";
        this.name = data.name || "";
        this.type = data.type || "";
        this.price = data.price || 0;
    }
}

export const ProductBaseField = {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxLength: 100,
    },
    quanity: {
        type: Number,
        default: 0,
    },
    saled_count: {
        type: Number,
        default: 0,
    },
    discount_percent: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive,
    },

    madeIn: {
        type: String,
        require: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: null,
    },
};
