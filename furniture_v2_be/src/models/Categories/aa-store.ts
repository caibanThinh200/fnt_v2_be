import { Schema, model, Model } from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CategoryBaseField from "./baseField";
import CommonFunction from "../../Utils/function";
import tree from "mongoose-data-tree";
import logger from "../../Config/logger";

const AACategoryField = {
    ...CategoryBaseField,
    child_cate: {
        type: [
            new Schema({
                ...CategoryBaseField,
                child_cate: {
                    type: [],
                },
            }),
        ],
        default: [],
    },
};

const CategorySchema = new Schema(
    { ...AACategoryField },
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    }
);

CategorySchema.add({
    child_cate: { type: [new Schema(AACategoryField)], default: [] },
});

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

CategorySchema.loadClass(CompositeCategory);

CategorySchema.plugin(tree);

const CategoryModel = model(
    CommonFunction.getStoreSchema(
        TAG_DEFINE.SCHEMA.CATEGORY,
        TAG_DEFINE.STORE.AA_PET
    ),
    CategorySchema
);

export default CategoryModel;
