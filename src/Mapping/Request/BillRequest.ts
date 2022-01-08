import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export default abstract class BillRequest implements generateData {
    
    private created_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        
        this.created_at = data?.created_at || Date.now();
    }
}
