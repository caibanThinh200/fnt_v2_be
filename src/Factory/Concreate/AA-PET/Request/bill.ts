import BillRequest from "../../../../Mapping/Request/BillRequest";

export default class AAPetRequest extends BillRequest {
    private userId: any;
    private products: any;
    private orderId: string;
    private total: number;

    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.userId = data?.userId;
        this.products = data?.products || [];
        this.orderId = data?.orderId;
        this.total = data?.total;
    }
}
