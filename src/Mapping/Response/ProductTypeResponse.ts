import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class ProductTypeResponse implements generateData {
    private _id: string;
    private name: string;
    private type: number
    private created_at: Date;
    private updated_at: Date;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data?._id.toString() || "";
        this.name = data?.name || "";
        this.type = data?.type || 0;
        this.created_at = data?.created_at || null;
        this.updated_at = data?.updated_at || null;
    }
}