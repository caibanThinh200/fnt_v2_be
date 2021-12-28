import mongoose from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CommonFunction from "../../Utils/function";
import {ProductDocument, FurnitureFields} from '../Product/furniture';
import baseField from "./baseField";

const OrderSchema = new mongoose.Schema({
    ...baseField,
    products: {
        type: [{
            product: FurnitureFields,
            quantity: Number
        }]
    },
    delivery: {
        type: {
            name: String,
            phone: String,
            address: String,
            status: {
                type: String,
                default: 'pending'
            }
        }
    },
    payment: {
        type: {
            status: {
                type: Boolean, 
                default: false
            },
            method: {
                type: String, 
                default: 'cash'
            }
        }
    }
});

const Order = mongoose.model(
  CommonFunction.getStoreSchema(
    TAG_DEFINE.SCHEMA.ORDER,
    TAG_DEFINE.STORE.FURNITURE
  ),
  OrderSchema
);

export default Order;
