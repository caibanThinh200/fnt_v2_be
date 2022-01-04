import { Schema, model, Model } from "mongoose";
import TAG_DEFINE from "../../Constant/define";
import CategoryBaseField from "./baseField";
import CommonFunction from "../../Utils/function";
import tree from "mongoose-data-tree";
import logger from "../../Config/logger";

const AACategoryField = {
    ...CategoryBaseField,
    childCate: {
        type: [
            new Schema({
                ...CategoryBaseField,
                childCate: {
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
    childCate: { type: [new Schema(AACategoryField)], default: [] },
});

class CompositeCategory extends Model {
    AddChildCate(rootCategory, child, nodeId): void {
        if (rootCategory._id.equals(nodeId)) {
            rootCategory.childCate.push(child);
            // console.log(rootCategory);
            return;
        } else {
            rootCategory.childCate.forEach((item) => {
                this.AddChildCate(item, child, nodeId);
            });
        }
    }

    // RemoveChildCate(rootCategory, nodeId): void {
    //     if (rootCategory._id.equals(nodeId)) {
    //         logger.info('success')
    //         rootCategory.childCate = rootCategory.childCate.filter(item => item._id !== nodeId);
    //         console.log(rootCategory);
    //         return;
    //     } else {
    //         rootCategory.childCate.forEach((item) => {
    //             this.RemoveChildCate(item, nodeId);
    //         });
    //     }
    // }

    FindChild(rootCategory, nodeId) {
        let result = null;
        if (rootCategory._id.equals(nodeId)) {
            return rootCategory.childCate;
        } else {
            rootCategory.childCate.forEach((item) => {
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
