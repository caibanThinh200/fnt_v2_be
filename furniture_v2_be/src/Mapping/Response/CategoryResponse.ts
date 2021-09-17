import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class CategoryResponse implements generateData {
    private _id: any;
    private name: any;
    private created_at: any;
    private updated_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data._id.toString() || "";
        this.name = data.name || "";
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }
}