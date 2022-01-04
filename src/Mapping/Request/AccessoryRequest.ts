import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export abstract class AccessoryRequest implements generateData {
    name: string;
    type: string;
    unit: string;
    types: number[];
    field: string;
    created_at: Date;
    updated_at: Date;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data?.name || "";
        this.type = data?.type || "";
        this.unit = data?.unit || "";
        this.types = data?.types || [];
        this.field = data?.field || ""
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
    }
}
