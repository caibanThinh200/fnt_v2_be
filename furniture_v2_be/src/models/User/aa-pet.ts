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
}

const UserSchema = new Schema({
    ...BaseField,
});

const User = model<UserDocument>(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.USER,
        TAG_DEFINE.STORE.AA_PET
    ),
    UserSchema
);

export default User;
