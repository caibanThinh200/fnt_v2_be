import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import BillBaseField from './baseField';
import { ImageSchema } from '../Upload/furniture';
import CommonFunction from '../../Utils/function';
import { FurnitureProductSchema } from '../Product/furniture';
import { UserSchema } from '../User/furniture';

const FurnitureBillField = {
    ...BillBaseField,
    code: {
        type: String,
        require: true
    },
    user: {
        type: {
            name: String,
            phone: String,
            address: String,
            email: String,
            note: String
        },
        require: true

    },
    status: {
        type: Number,
        default: 0
    },
    products: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.FURNITURE),
            }, 
            buy_quantity: Number
        }],
        require: true
    }
}

export const BillSchema = new Schema(FurnitureBillField, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.BILL, TAG_DEFINE.STORE.FURNITURE), BillSchema);
export default CategoryModel;