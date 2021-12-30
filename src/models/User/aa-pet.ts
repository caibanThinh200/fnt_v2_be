import mongoose, { Schema, model } from "mongoose";
import BaseField from "./BaseField";
import CommonFunction from "../../Utils/function";
import TAG_DEFINE from "../../Constant/define";
import bcrypt from "bcrypt";

interface UserDocument extends mongoose.Document {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    gender: number;
    delivery: {
        name: string;
        phone: string;
        address: string;
    }
}

const UserSchema = new Schema(
    {
        ...BaseField,
        username: {
            type: String,
            required: true,
            unique: true,
        },
        delivery: [{
            type: {
                name: String,
                phone: String,
                address: String
            },
            default: []
        }],
        role: {
            type: String,
            default: "customer"
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const UserModel = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.USER,
        TAG_DEFINE.STORE.AA_PET
    ),
    UserSchema
);

export default UserModel;
