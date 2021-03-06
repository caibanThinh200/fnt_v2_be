import { generateData } from '../../Factory/interface';
import TAG_DEFINE from '../../Constant/define';

export default abstract class BillRequest implements generateData {
    private total: any
    private created_at: any

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        // !isNaN(data?.total) ? data?.total > 0 ? data?.total : (data?.products || []).reduce((i, k) => i + k.price * k.buy_quantity, 0) : (data?.products || []).reduce((i, k) => i + k.price * k.buy_quantity, 0);
        this.total = data?.total || 0;
        this.created_at = data?.created_at || Date.now();
    }
}
