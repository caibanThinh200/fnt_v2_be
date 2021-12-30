import mongoose, {Schema, model} from 'mongoose';
import BaseField from './BaseField';
import CommonFunction from '../../Utils/function';
import TAG_DEFINE from '../../Constant/define'
import bcrypt from "bcrypt";

interface UserDocument extends mongoose.Document {
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
}

export const UserSchema = new Schema(
    {
        ...BaseField,
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const User = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.USER, TAG_DEFINE.STORE.FURNITURE), UserSchema);

export default User;

