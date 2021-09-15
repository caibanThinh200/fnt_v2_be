import TAG_DEFINE from "../../Constant/define";
import mongoose from "mongoose";
import GiftsSchema from '../GiftsSchema';
import FurnitureSchema from './furniture';
const {Schema} = mongoose;

export const aaa = {
    bbb: 123123
}

export const ProductBaseField = {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength: 100
    },
    quanity: {
        type: Number,
        default: 0
    },
    saled_count: {
        type: Number,
        default: 0
    },
    discount_percent: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: TAG_DEFINE.STATUS.unactive
    },
    type: {
        required: true,
        type: String,
    },
    madeIn: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    },
};

export const createSchema = (data ,type) => {
    switch(type) {
        case "furniture": {
            const model =  new FurnitureSchema(data);
            console.log(12312, model)
            return model;
        }
        default: {
            return new FurnitureSchema(data)
        }
    }
}

export const getSchema = (type) => {
    switch(type) {
        case "furniture": return FurnitureSchema
        default: return FurnitureSchema
    }
}
