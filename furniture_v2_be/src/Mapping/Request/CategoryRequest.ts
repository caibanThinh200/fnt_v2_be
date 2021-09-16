import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class CategoryRequest implements generateData {
    private name: any;
    private created_at: any;
    private updated_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data.name || "";
        this.created_at = data.created_at || Date.now;
        this.updated_at = data.updated_at || null;
    }
}

export const CategoryBaseField = {
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
};