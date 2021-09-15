import { Schema, model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import FuritureFields from './furniture';

const ChildField = {
    ...FuritureFields
}

const CategoryBaseField = new Schema({
    ...ChildField,
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
});

const CategorySchema = model(TAG_DEFINE.SCHEMA.CATEGORY, CategoryBaseField);
export default CategorySchema;