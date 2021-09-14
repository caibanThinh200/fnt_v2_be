import mongoose from "mongoose";

const {Schema} = mongoose;

const bill = new Schema({
    product: {
        type: []
    }
})