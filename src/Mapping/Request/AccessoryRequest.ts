import { generateData } from "../../Factory/interface";
import TAG_DEFINE from "../../Constant/define";

export abstract class AccessoryRequest implements generateData {
    private name: string;
    private type: string;
    private unit: string;
    private created_at: Date;
    private updated_at: Date;
    private field: string;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this.name = data?.name || "";
        this.type = data?.type || "";
        this.unit = data?.unit || "";
        this.created_at = data?.created_at || Date.now();
        this.updated_at = data?.updated_at || null;
        this.field = data?.field || "";
    }
}
