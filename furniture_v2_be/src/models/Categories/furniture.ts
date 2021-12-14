import { Schema, model, Types, Model } from 'mongoose';
import TAG_DEFINE from '../../Constant/define';
import  CategoryBaseField from './baseField';
import { ImageSchema } from '../Upload/furniture';
import CommonFunction from '../../Utils/function';
import tree from "mongoose-data-tree";
import mongoose from 'mongoose';
import { FurnitureProductSchema } from '../Product/furniture';

const FurnitureCategoryField = {
    ...CategoryBaseField,
    _id: Schema.Types.ObjectId,
    code: {
        require: true,
        type: String
    },
    childCate: {
        type: []
    },
    name: {
        type: String,
        unique: false
    },
    products: {
        type: [Schema.Types.ObjectId],
        ref: CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.PRODUCT, TAG_DEFINE.STORE.FURNITURE)
    }
    // image: {
    //     type: ImageSchema
    // }
}

class CompositeCategory extends Model {
    AddChildCate(rootCategory, child, nodeId): void {
        if (rootCategory._id.equals(nodeId)) {
            rootCategory.child_cate.push(child);
            // console.log(rootCategory);
            return;
        } else {
            rootCategory.child_cate.forEach((item) => {
                this.AddChildCate(item, child, nodeId);
            });
        }
    }

    // RemoveChildCate(rootCategory, nodeId): void {
    //     if (rootCategory._id.equals(nodeId)) {
    //         logger.info('success')
    //         rootCategory.child_cate = rootCategory.child_cate.filter(item => item._id !== nodeId);
    //         console.log(rootCategory);
    //         return;
    //     } else {
    //         rootCategory.child_cate.forEach((item) => {
    //             this.RemoveChildCate(item, nodeId);
    //         });
    //     }
    // }

    FindChild(rootCategory, nodeId) {
        let result = null;
        if (rootCategory._id.equals(nodeId)) {
            return rootCategory.child_cate;
        } else {
            rootCategory.child_cate.forEach((item) => {
                result = this.FindChild(item, nodeId);
            });
        }

        return result;
    }
}

export const CategorySchema = new Schema(
    { ...FurnitureCategoryField },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

CategorySchema.loadClass(CompositeCategory);
CategorySchema.add({
    childCate: {type: [new Schema(FurnitureCategoryField)], default: []}
})

CategorySchema.plugin(tree);
const CategoryModel = model(CommonFunction.getStoreSchema(TAG_DEFINE.SCHEMA.CATEGORY, TAG_DEFINE.STORE.FURNITURE), CategorySchema);
export default CategoryModel;