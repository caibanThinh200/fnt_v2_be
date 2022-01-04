import { Schema, model } from 'mongoose';
import RevenueBaseField from './baseField';
import CommonFunction from '../../Utils/function';
import TAG_DEFINE from '../../Constant/define';

export const FurnitureRevenueSchema = new Schema({
    ...RevenueBaseField,
    percent_kpi: {
        type: Number,
        default: 0
    }
});

const FurnitureModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.MONTH_REVENUE, TAG_DEFINE.STORE.FURNITURE), FurnitureRevenueSchema);
export default FurnitureModel;