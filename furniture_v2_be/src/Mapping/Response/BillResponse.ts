import {generateData} from '../../Factory/interface'

export default abstract class BillRequest implements generateData {
    private _id: any;
    private created_at: any;
    private updated_at: any;
    private bill_info: any;
    private total_cost: any;
    
    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        this._id = data._id.toString() || '';
        this.created_at = data.created_at || new Date();
        this.updated_at = data.updated_at || null;
        this.bill_info = data.bill_info || [];
        this.total_cost = data.total_cost || 0;
    }

}