import { generateData } from "../../Factory/interface";
import TAG_DEFINE from '../../Constant/define';

export abstract class UploadRequest implements generateData {
    private url: any;
    private role: any;
    private name: any;
    private created_at: any;
    private updated_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.url = data.url || "";
        this.name = data.name || "";
        this.role = data.role || "";
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }
}

export const ImageBaseField = {
    url: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "subThumb"
    },
    name: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: null
    }
}