import { generateData } from '../../Factory/interface';

export default abstract class MonthRevenueResponse implements generateData {
    private month: number
    private total: number
    private id: string;
    private target: number
    private percent_kpi: number
    private created_at: Date

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        // !isNaN(data?.total) ? data?.total > 0 ? data?.total : (data?.products || []).reduce((i, k) => i + k.price * k.buy_quantity, 0) : (data?.products || []).reduce((i, k) => i + k.price * k.buy_quantity, 0);
        this.id = data?._id?.toString() || "";
        this.month = data?.month || new Date().getMonth() + 1;
        this.total = data?.total || 0;
        this.target = data?.target || 0;
        this.percent_kpi = (data.target/data?.total) * 100 || 0;
        this.created_at = data?.created_at || Date.now();
    }
}
