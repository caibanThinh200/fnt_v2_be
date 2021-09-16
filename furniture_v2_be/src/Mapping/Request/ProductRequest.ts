import { generateData } from "../../Factory/interface";
import logger from '../../config/logger';
import TAG_DEFINE from '../../Constant/define';

export abstract class ProductRequest implements generateData {
    private name: any;
    private description: any;
    private quantity: any;
    private saled_count: any;
    private discount_percent: any;
    private price: any;
    private status: any;
    private type: any;
    private madeIn: any;
    private created_at: any;
    private updated_at: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data.name || "";
        this.description = data.description || "";
        this.quantity = data.quantity || 0;
        this.saled_count = data.saled_count || 0;
        this.discount_percent = data.discount_percent || 0;
        this.price = data.price || 0;
        this.status = data.status || 0;
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
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
    quantity: {
        type: Number,
        require: true,
        default: 0
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
        default: 0
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
