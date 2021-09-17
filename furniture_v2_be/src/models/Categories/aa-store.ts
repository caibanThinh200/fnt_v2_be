import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import  CategoryBaseField from './baseField';
import CommonFunction from '../../Utils/function';


const AACategoryField = {
    ...CategoryBaseField,
    // image: {
    //     type: ImageSchema
    // }
}

export const CategorySchema = new Schema(AACategoryField);

const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.AA_PET), CategorySchema);
export default CategoryModel;