import TAG_DEFINE from "../../Constant/define";

const baseField = {
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
};

export default baseField;