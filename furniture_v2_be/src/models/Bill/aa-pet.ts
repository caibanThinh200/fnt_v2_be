import baseField from "./baseField";
import mongoose from "mongoose";
import TAG_DEFINE from '../../Constant/define'
import CommonFunction from '../../Utils/function'

const schema = new mongoose.Schema({
    ...baseField,
});

const Bill = mongoose.model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.BILL, TAG_DEFINE.STORE.AA_PET), schema);

export default Bill;