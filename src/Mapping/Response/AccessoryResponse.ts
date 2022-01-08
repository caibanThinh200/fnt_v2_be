import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class AccessoryResponse implements generateData {
    private _id: string;
    private name: string;
    private unit: string;
    private created_at: Date;
    private updated_at: Date;
    private field: string;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id || "";
        this.name = data?.name || "";
        this.unit = data?.unit || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
        this.field = data?.field || ""
    }
}
