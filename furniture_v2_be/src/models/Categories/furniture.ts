import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import { CategoryBaseField } from '../../Mapping/Request/CategoryRequest';
import { ImageSchema } from '../Images/furniture';


const FurnitureCategoryField = {
    ...CategoryBaseField,
    code: {
        require: true,
        type: String
    },
    image: {
        type: ImageSchema
    }
}

export const CategorySchema = new Schema(FurnitureCategoryField);

const CategoryModel = model(TAG_DEFINE.SCHEMA.CATEGORY, CategorySchema);
export default CategoryModel;