import { generateData } from "../../Factory/interface";
import TAG_DEFINE from '../../Constant/define';

export abstract class UploadRequest implements generateData {
    private url: any;
    private field: any;
    private name: any;
    private created_at: any;
    private updated_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.url = data?.originalname || "";
        this.name = data?.filename || "";
        this.field = data?.fieldname || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
    }
}
