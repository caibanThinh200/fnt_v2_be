import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import { CategoryBaseField } from '../../Mapping/Request/CategoryRequest';
import { ImageSchema } from '../Images/furniture';
import CommonFunction from '../../Utils/function';


const FurnitureCategoryField = {
    ...CategoryBaseField,
    code: {
        require: true,
        type: String
    },
    // image: {
    //     type: ImageSchema
    // }
}

export const CategorySchema = new Schema(FurnitureCategoryField);

const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.FURNITURE), CategorySchema);
export default CategoryModel;