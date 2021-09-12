const mongoose = require("mongoose"),
{Schema} = mongoose;

const bill = new Schema({
    product: {
        type: []
    }
})